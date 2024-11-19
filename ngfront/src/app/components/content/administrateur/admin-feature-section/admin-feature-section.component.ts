import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-feature-section',
  templateUrl: './admin-feature-section.component.html',
  styleUrls: ['./admin-feature-section.component.css']
})
export class AdminFeatureSectionComponent {
  @Input() title: string = 'Gérer utilisateurs';
  @Input() description: string = 'Notre fonctionnalité CRUD vous permet de créer, lire, mettre à jour et supprimer facilement les utilisateurs. Simplifiez votre gestion et gagnez du temps avec AtypickHouse.';
  @Input() imageUrl: string = '../../assets/images/gereUtilisateurs.png';
  @Input() buttonText: string = 'Gérer utilisateurs';
}
