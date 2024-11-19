import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitatService } from '../../../../services/habitat.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appart-by-id',
  templateUrl: './appart-by-id.component.html',
  styleUrls: ['./appart-by-id.component.css'], 
    providers: [
    { provide: LOCALE_ID, useValue: 'fr' }  // Définit la localisation en français
  ]
})
export class AppartByIdComponent implements OnInit {
  habitat: any;
  images: string[] = [];  // Tableau pour stocker les URLs des images
  currentImageIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private habitatService: HabitatService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentImageIndex = 0; // Initialiser l'index à 0
    this.getByIdHabitat();
  }

  getByIdHabitat(): void {
    const habitatId = Number(this.route.snapshot.paramMap.get('id'));

    this.habitatService.getHabitatById(habitatId).subscribe(
      (data: any) => {
        this.habitat = data;
        console.log('Habitat récupéré:', this.habitat);

        // Charger les images de l'habitat
        if (this.habitat.images && this.habitat.images.length > 0) {
          this.habitat.images.forEach((imageId: string) => {
            const imageApiUrl = `https://dsp-devo22b-jg-sr-ml-my.net${imageId}`;
            console.log('Appel API pour récupérer l\'image:', imageApiUrl); // Vérifier l'URL API

            this.http.get<any>(imageApiUrl).subscribe(
              (response) => {
                let imageUrl = response.url;

                // Vérifier si l'URL commence déjà par "http"
                if (!imageUrl.startsWith('http')) {
                  imageUrl = `https://localhost:8000${response.url}`;
                }

                this.images.push(imageUrl);
                console.log('Image URL ajoutée:', imageUrl); // Vérifie chaque URL d'image ajoutée
              },
              (error) => {
                console.error('Erreur lors du chargement de l\'image:', error);
              }
            );
          });
        } else {
          console.warn('Aucune image récupérée ou images mal formées.');
        }
      },
      (error: any) => {
        console.error('Erreur lors de la récupération de l\'habitat:', error);
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

  goToReservation(): void {
    if (this.habitat && this.habitat.id) {
      this.router.navigate(['/reservation'], { queryParams: { habitatId: this.habitat.id } });
    }
  }
}
