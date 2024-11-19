import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { HabitatService } from '../../../services/habitat.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  habitat: any;
  reservation = {
    startDate: '',          // Date d'arrivée au format string
    endDate: '',            // Date de départ
    totalPrice: 0,          // Prix total calculé
    user: '/api/users/803', // URI de l'utilisateur (fixé)
    habitat: '',            // URI de l'habitat
    status: '/api/statuses/106', // URI du statut "réservé"
    payments: [{ method: 'card' }] // Mode de paiement
  };

  images: string[] = [];
  currentImageIndex = 0;
  apiUrl = environment.apiUrl.replace("/api", "");

  constructor(
    private route: ActivatedRoute,
    private habitatService: HabitatService,
    private http: HttpClient,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.currentImageIndex = 0;
    this.route.queryParams.subscribe(params => {
      const habitatId = params['habitatId'];
      if (habitatId) {
        this.getByIdHabitat(habitatId);
      } else {
        console.error('Aucun ID d\'habitat fourni.');
      }
    });
  }

  getByIdHabitat(habitatId: number): void {
    this.habitatService.getHabitatById(habitatId).subscribe(
      (data: any) => {
        this.habitat = data;
        this.reservation.habitat = `/api/habitats/${this.habitat.id}`;
        console.log('Habitat récupéré:', this.habitat);

        if (this.habitat.images && this.habitat.images.length > 0) {
          this.habitat.images.forEach((imageId: string) => {
            const imageApiUrl = `${this.apiUrl}${imageId}`;
            this.http.get<any>(imageApiUrl).subscribe(
              (response) => {
                let imageUrl = response.url.startsWith('http') ? response.url : `${this.apiUrl}${response.url}`;
                this.images.push(imageUrl);
                this.cdr.detectChanges();
                console.log('Image URL ajoutée:', imageUrl);
              },
              (error) => {
                console.error('Erreur lors du chargement de l\'image:', error);
              }
            );
          });
        } else {
          console.warn('Aucune image disponible pour cet habitat.');
        }
      },
      (error: any) => {
        console.error('Erreur lors de la récupération de l\'habitat:', error);
      }
    );
  }

  calculateTotalPrice(): void {
    if (this.reservation.startDate && this.reservation.endDate && this.habitat?.pricePerNight) {
      const start = new Date(this.reservation.startDate);
      const end = new Date(this.reservation.endDate);
      const days = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
      this.reservation.totalPrice = days * this.habitat.pricePerNight;
    } else {
      this.reservation.totalPrice = 0;
    }
  }

  makeReservation(): void {
    // Vérifications nécessaires (comme la date, la disponibilité et le calcul du prix total)
    if (!this.reservation.startDate || !this.reservation.endDate) {
        alert('Veuillez sélectionner une date d\'arrivée et de départ.');
        return;
    }

    const startDate = new Date(this.reservation.startDate);
    const endDate = new Date(this.reservation.endDate);
    if (endDate <= startDate) {
        alert('La date de départ doit être postérieure à la date d\'arrivée.');
        return;
    }

    if (!this.habitat) {
        alert('Les informations de l\'habitat ne sont pas disponibles.');
        return;
    }

    this.calculateTotalPrice();

    const startDateISO = startDate.toISOString();
    const endDateISO = endDate.toISOString();

    const reservationPayload = {
        startDate: startDateISO,
        endDate: endDateISO,
        totalPrice: this.reservation.totalPrice,
        user: this.reservation.user,
        habitat: this.reservation.habitat,
        status: this.reservation.status,
        payments: []
    };

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Content-Type': 'application/ld+json',
        'Authorization': `Bearer ${token}`
    });

    console.log('Objet de réservation envoyé:', JSON.stringify(reservationPayload, null, 2));

    this.http.post(`${environment.apiUrl}/reservations`, reservationPayload, { headers })
        .subscribe(
            (response: any) => {
                alert('Réservation temporaire effectuée avec succès ! Vous allez être redirigé vers la page de paiement.');
                const reservationId = response.id;
                this.router.navigate(['/checkout'], { queryParams: { reservationId, amount: this.reservation.totalPrice, habitatName: this.habitat.name } });
            },
            (error) => {
                console.error('Erreur lors de la réservation:', error);
                alert('Erreur lors de la réservation. Veuillez réessayer.');
            }
        );
}



  nextImage(): void {
    if (this.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }
    console.log('Image suivante, index:', this.currentImageIndex);
  }

  previousImage(): void {
    if (this.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    }
    console.log('Image précédente, index:', this.currentImageIndex);
  }
}
