import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-reservation-confirm',
  templateUrl: './reservation-confirm.component.html',
  styleUrls: ['./reservation-confirm.component.css']
})
export class ReservationConfirmComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.loadConfettiLibrary().then(() => {
      this.loadConfettiScript();
    });
  }

  // Charger la librairie confetti dynamiquement
  loadConfettiLibrary(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = this.renderer.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js';
      script.onload = () => resolve();
      script.onerror = () => reject('Erreur lors du chargement de la librairie confetti');
      this.renderer.appendChild(document.body, script);
    });
  }

  // Charger le script de confettis (confirmation.js) après la librairie
  loadConfettiScript() {
    const script = this.renderer.createElement('script');
    script.src = '/assets/js/confirmation.js';  // Assure-toi que le chemin est correct
    script.defer = true;
    this.renderer.appendChild(document.body, script);
  }
}
