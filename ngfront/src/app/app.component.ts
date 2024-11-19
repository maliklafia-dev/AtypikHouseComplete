import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '././services/auth.service';  // Import du service d'authentification

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeaderFooter = true;
  isLoggedIn = false;  // Variable pour gérer l'état de connexion

  constructor(private router: Router, private authService: AuthService) {  // Ajout du service d'authentification
    this.router.events.subscribe(() => {
      // Liste des routes où le header et le footer ne doivent pas apparaître
      const noHeaderFooterRoutes = ['/login', '/register'];  // Ajoute ici d'autres routes si nécessaire
      this.showHeaderFooter = !noHeaderFooterRoutes.includes(this.router.url);

      // Mise à jour de l'état de connexion à chaque changement de route
      this.isLoggedIn = this.authService.isLoggedIn();
    });
  }
}
