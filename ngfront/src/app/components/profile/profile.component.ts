import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';  // Import direct de jwt-decode
import { AuthService } from '../../services/auth.service';

// Interface pour représenter le payload du JWT
interface DecodedToken {
  username: string;  // Ou 'username', selon ce qui est stocké dans ton token
  email: string;
  exp: number;
  roles: string[];
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName: string = '';  // Variable pour stocker le nom de l'utilisateur
  isAdmin: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // Récupérer le token directement depuis le localStorage
    const token = localStorage.getItem('token');

    // Décoder le token si disponible
    if (token) {
      const decodedToken: DecodedToken = jwtDecode<DecodedToken>(token);
      console.log(decodedToken);
      if (decodedToken && decodedToken.username) {
        this.userName = decodedToken.username;  // Assigner le nom d'utilisateur
        this.isAdmin = this.authService.isAdmin(); // Vérification du rôle
      }
    }
  }

  logout() {
    // Supprimer le token et rediriger vers la page de connexion
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
