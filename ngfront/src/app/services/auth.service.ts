import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';  
import { GetApiService } from './get-api.service';
import { User } from '../models/user.model';  

interface DecodedToken {
  username: string;  // Ou 'username', selon ce qui est stocké dans ton token
  email: string;
  exp: number;
  roles: string[];
}


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string;

  constructor(private http: HttpClient, private getApi: GetApiService) {
    this.apiUrl = this.getApi.getApi();
  }

  // Méthode d'inscription pour créer un nouvel utilisateur
  register(user: User): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/ld+json' });
    return this.http.post(`${this.apiUrl}/users`, JSON.stringify(user), { headers });
  }

  // Méthode de connexion pour envoyer les identifiants et sauvegarder le token JWT
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login_check`, credentials).pipe(
      tap((response: any) => {
        // Sauvegarde du token JWT dans le localStorage après une connexion réussie
        localStorage.setItem('token', response.token);
      })
    );
  }

  storeUserId(token: string): void {
    try {
      // Décoder le token pour obtenir l'ID de l'utilisateur
      const decodedToken: any = jwtDecode(token);
      
      // Supposons que l'ID de l'utilisateur se trouve dans `decodedToken.userId`
      const userId = decodedToken.userId;
      
      // Stocker l'ID de l'utilisateur dans le localStorage
      localStorage.setItem('userId', userId);
    } catch (error) {
      console.error("Erreur lors du décodage du token", error);
    }
  }

  // Récupérer le token depuis le localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Méthode pour vérifier si l'utilisateur est connecté (basée sur le JWT)
  isLoggedIn(): boolean {
    return this.isAuthenticated();
  }

  // Méthode pour déconnecter l'utilisateur
  logout(): void {
    localStorage.removeItem('token');
  }

  // Méthode pour vérifier si l'utilisateur est authentifié (basée sur le JWT)
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false; // Si pas de token, l'utilisateur n'est pas authentifié
    }

    try {
      // Décoder le token JWT pour vérifier l'expiration
      const decodedToken: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);

      // Retourne true si le token n'est pas expiré
      return decodedToken.exp > currentTime;
    } catch (error) {
      return false; // Si le décodage échoue, retourne false
    }
  }

  // Méthode pour décoder le token
  getDecodedToken() {
    const token = this.getToken();
    if (token) {
      return jwtDecode(token);  // Utilisation de jwtDecode pour décoder le token
    }
    return null;
  }
  getUserRoles(): string[] {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token); // Décode le token pour obtenir ses informations
      return decodedToken.roles || []; // Retourne les rôles de l'utilisateur ou un tableau vide
    }
    return [];
  }

  isAdmin(): boolean {
    const decodedToken: any = this.getDecodedToken();
    if (decodedToken && decodedToken.roles) {
      return decodedToken.roles.includes('ROLE_ADMIN');
    }
    return false;
  }
}
