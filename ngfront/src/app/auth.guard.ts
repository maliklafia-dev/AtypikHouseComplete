import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = route.data['roles']; // Récupère les rôles autorisés depuis les données de la route

    if (this.authService.isAuthenticated()) { // Vérifie si l'utilisateur est authentifié
      const userRoles = this.authService.getUserRoles(); // Récupère les rôles de l'utilisateur depuis le service d'authentification
      if (expectedRoles) {
        // Vérifie si l'utilisateur a un des rôles attendus
        const hasRole = userRoles.some(role => expectedRoles.includes(role));
        if (hasRole) {
          return true; // Autorise l'accès si l'utilisateur a le rôle attendu
        } else {
          this.router.navigate(['/unauthorized']); // Redirige vers une page d'erreur si l'utilisateur n'a pas le bon rôle
          return false;
        }
      }
      return true; // Si aucun rôle n'est requis, autorise l'accès
    } else {
      this.router.navigate(['/error-page']); // Redirige si l'utilisateur n'est pas connecté
      return false;
    }
  }

}
