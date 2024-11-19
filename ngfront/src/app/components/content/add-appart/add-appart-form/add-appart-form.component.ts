import { Component } from '@angular/core';
import { HabitatService } from '../../../../services/add-habitat-form-service';
import { Habitat } from '../../../../models/habitat.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from '../../../../models/category.model';
import { CategoryService } from '../../../../services/category.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../../../src/environments/environment';  // Assurez-vous d'avoir un fichier d'environnement avec l'URL de l'API

@Component({
  selector: 'app-add-appart-form',
  templateUrl: './add-appart-form.component.html',
  styleUrls: ['./add-appart-form.component.css']
})
export class AddHabitatFormComponent {
  habitat: Habitat = {
    title: '',
    description: '',
    slug: '',
    location: '',
    city: '',
    country: '',
    pricePerNight: 0,
    maxGuests: 0,
    amenities: [],
    availability: [],
    category: "", // Initialisation à null
    images: [],
    id: 0,
    createdAt: '',
    updatedAt: '',
    owner: undefined,
    startDate:new Date(),
    endDate:new Date()
  };
  
  showPopup = false; // Variable pour gérer l'affichage du popup
  categories: Category[] = [];  // Pour stocker la liste des catégories
  selectedFiles: File[] = [];  // Pour stocker les fichiers sélectionnés
  imageUrls: string[] = [];  // Pour stocker les URLs des images uploadées
  apiUrl = environment.apiUrl;  // Utilisation de l'URL de l'API depuis l'environnement
  conditionsAccepted: boolean = false;
  // token = localStorage.getItem('token');
  // headers = new HttpHeaders({
  //   'Authorization': `Bearer ${this.token}`,
  //   'Content-Type': 'multipart/form-data'
  //   });


  constructor(private habitatService: HabitatService, private categoryService: CategoryService, private http: HttpClient) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categories = data['hydra:member'];
    }, error => {
      console.error('Erreur lors de la récupération des catégories', error);
    });
  }

  // Méthode appelée lors de la sélection des fichiers
  onFileSelected(event: any) {
    if (event.target.files) {
      this.selectedFiles = Array.from(event.target.files);  // Convertit les fichiers en un tableau
      console.log(this.selectedFiles);  // Vérification
    }
  }

  uploadImages(habitatId: number): void {
    const formData = new FormData();

    // Ajout des fichiers images
    this.selectedFiles.forEach((file: File) => {
      formData.append('images[]', file, file.name);
    });

    // Ajouter l'ID de l'habitat
    formData.append('habitat_id', habitatId.toString());

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.post(`${this.apiUrl}/upload-images`, formData, { headers }).subscribe(response => {
      console.log('Images uploadées avec succès', response);
    }, (error: HttpErrorResponse) => {
      console.error('Erreur lors de l\'upload des images', error);
    });
  }

  // Soumettre le formulaire pour créer l'habitat
  onSubmit() {
    // Étape 1 : Créer l'habitat
    const habitatData = {
      title: this.habitat.title,
      description: this.habitat.description,
      slug: this.habitat.slug,
      location: this.habitat.location,
      city: this.habitat.city,
      country: this.habitat.country,
      pricePerNight: this.habitat.pricePerNight,
      maxGuests: this.habitat.maxGuests,
      amenities: Array.isArray(this.habitat.amenities) ? this.habitat.amenities : [this.habitat.amenities],
      availability: Array.isArray(this.habitat.availability) ? this.habitat.availability : [this.habitat.availability],
      category: typeof this.habitat.category === 'string'
        ? this.habitat.category
        : this.habitat.category['@id'],
      startDate: this.habitat.startDate,  // Ajout de startDate
      endDate: this.habitat.endDate,      // Ajout de endDate
      images: []  // On ajoutera les images plus tard
    };

    this.habitatService.createHabitat(habitatData).subscribe(response => {
      console.log('Habitat créé avec succès', response);
      this.showPopup = true;  // Afficher le popup
      const habitatId = response.id;  // Récupérer l'ID de l'habitat créé

      // Étape 2 : Uploader les images avec l'ID de l'habitat
      this.uploadImages(habitatId);
    }, (error: HttpErrorResponse) => {
      console.error('Erreur lors de l\'ajout de l\'habitat', error);
    });
    
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false; // Fermer le popup
  }

}
