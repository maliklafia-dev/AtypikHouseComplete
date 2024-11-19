import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { HabitatService } from '../../../../services/habitat.service';
import { Habitat } from '../../../../models/habitat.model';
import { Router } from '@angular/router';
import { StripeService } from '../../../../services/stripe.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appart-list',
  templateUrl: './appart-list.component.html',
  styleUrls: ['./appart-list.component.css'],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }  // Définit la localisation en français
  ]
})

export class AppartListComponent implements OnInit {
  habitats: Habitat[] = []; // Tous les habitats
  filteredHabitats: Habitat[] = []; // Habitats filtrés pour la recherche
  searchTerm: string = ''; // Variable de recherche
  loading = false;
  errorMessage: string | null = null;
  apiUrl = environment.apiUrl;

  searchData = {
    destination: '',
    arrival: '',
    departure: ''
  };

  imageUrls: { [key: number]: string } = {}; // Associer l'ID de l'habitat à l'URL de l'image

  constructor(
    private habitatService: HabitatService,
    private router: Router,
    private stripeService: StripeService,
    private http: HttpClient, 
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // Récupérer la catégorie depuis les paramètres de l'URL
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      this.fetchHabitats(category); // Passe la catégorie pour filtrer les habitats
    });
  }

  onSearch() {
    this.filteredHabitats = this.habitats.filter(habitat =>
      (!this.searchData.destination || habitat.city.includes(this.searchData.destination)) &&
      (!this.searchData.arrival || new Date(habitat.startDate) <= new Date(this.searchData.arrival)) &&
      (!this.searchData.departure || new Date(habitat.endDate) >= new Date(this.searchData.departure))
    );
  }

  // Récupérer tous les habitats et les filtrer par catégorie si nécessaire
  fetchHabitats(category?: string): void {
    this.habitatService.getHabitats().subscribe(
      (data: any) => {
        this.habitats = (data['hydra:member'] || [])
          .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 6);

        // Filtrer les habitats si une catégorie est spécifiée
        if (category) {
          this.filteredHabitats = this.habitats.filter(habitat => habitat.category === category);
        } else {
          this.filteredHabitats = this.habitats;
        }

        console.log("Liste des habitats", this.habitats);

        // Charger les images pour chaque habitat
        this.habitats.forEach((habitat) => {
          if (habitat.images && habitat.images.length > 0) {
            let imageObject = `${this.apiUrl}${habitat.images[0]}`
            let imageApiUrl = imageObject.replace("/api", "");

            console.log(imageApiUrl);
            // Requête pour récupérer les détails de l'image
            this.http.get<any>(imageApiUrl).subscribe(
              (response) => {
                const imageUrl = response.url.startsWith('http') ? response.url : `${this.apiUrl}${response.url}`;
                this.imageUrls[habitat.id] = imageUrl;
              },
              (error) => {
                console.error(`Erreur lors du chargement de l'image pour l'habitat ${habitat.title}:`, error);
                this.imageUrls[habitat.id] = 'assets/images/placeholder-image7@2x.png';
              }
            );
          } else {
            this.imageUrls[habitat.id] = 'assets/images/placeholder-image7@2x.png';
          }
        });
      },
      (error) => {
        console.error('Erreur lors de la récupération des habitats:', error);
      }
    );
  }

  // Filtrer les habitats en fonction du terme de recherche
  filterHabitats(): void {
    this.filteredHabitats = this.habitats.filter(
      (habitat) =>
        habitat.title.toLowerCase().includes(this.searchTerm) ||
        (habitat.description &&
          habitat.description.toLowerCase().includes(this.searchTerm)) ||
        (habitat.pricePerNight &&
          habitat.pricePerNight
            .toString()
            .toLowerCase()
            .includes(this.searchTerm)) ||
        (habitat.city &&
          habitat.city.toString().toLowerCase().includes(this.searchTerm)) ||
        (habitat.country &&
          habitat.country.toString().toLowerCase().includes(this.searchTerm))
    );
  }

  // Afficher les détails d'un habitat
  viewHabitat(habitatId: number): void {
    this.router.navigate(['/id-appart', habitatId]);
  }

  // Afficher les commentaires pour un habitat
  viewComments(habitatId: number): void {
    this.router.navigate(['/comments', habitatId]);
  }

  // Démarrer la procédure de paiement Stripe
  startCheckout(title: string, amount: number): void {
    this.loading = true;
    this.errorMessage = null;

    const lineItems = [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: title,
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ];

    const successUrl = `${window.location.origin}/success`;
    const cancelUrl = `${window.location.origin}/cancel`;

    this.stripeService
      .createCheckoutSession(lineItems, successUrl, cancelUrl)
      .subscribe(
        (response: { url: string }) => {
          this.loading = false;
          if (response && response.url) {
            window.location.href = response.url;
          } else {
            this.errorMessage = 'La création de la session Stripe a échoué.';
          }
        },
        (error) => {
          this.loading = false;
          this.errorMessage =
            'Erreur lors de la création de la session Stripe. Veuillez réessayer plus tard.';
        }
      );
  }
}
