import { Component} from '@angular/core';

@Component({
  selector: 'app-navbar-connected',
  templateUrl: './navbar-connected.component.html',
  styleUrls: ['./navbar-connected.component.css']
})
export class NavbarConnectedComponent {
  showProfilePopup: boolean = false;  // Variable pour contrôler l'affichage du popup
  isMenuActive = false;

  // Méthode pour afficher ou masquer le popup
  toggleProfilePopup() {
    this.showProfilePopup = !this.showProfilePopup;
  }
  
  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  closeMenu() {
    this.isMenuActive = false;
  }

}
