import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.css']
})
export class NavbarMainComponent implements OnInit {
  isLoggedIn: boolean = false;
  isMenuActive = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Vérifie si l'utilisateur est connecté
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  // Méthode pour se déconnecter
  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    window.location.href = '/login'; // Redirection après la déconnexion
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  closeMenu() {
    this.isMenuActive = false;
  }
}
