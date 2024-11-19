import { Component } from '@angular/core';

@Component({
  selector: 'app-view-owner-appart-list',
  templateUrl: './view-owner-appart-list.component.html',
  styleUrl: './view-owner-appart-list.component.css'
})
export class ViewOwnerAppartListComponent {
  apartments = [
    {
      name: 'Tanière Boisée',
      description: 'Appartement spacieux avec vue imprenable sur la nature.',
      image: './assets/images/placeholder-image@2x.png'
    },
    {
      name: 'Le vaisseau de l’infini',
      description: 'Appartement confortable avec accès facile aux sentiers de randonnée.',
      image: './assets/images/placeholder-image1@2x.png'
    },
    {
      name: 'Le navire du pirate',
      description: 'Appartement moderne avec piscine privée et vue sur la forêt.',
      image: './assets/images/placeholder-image2@2x.png'
    },

    // Add more apartments as needed
  ];

  constructor() { }

  search(query: string) {
    // Logic for searching apartments
  }
}
