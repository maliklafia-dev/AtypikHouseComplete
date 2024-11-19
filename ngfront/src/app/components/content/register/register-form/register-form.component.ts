// src/app/components/auth/register-form/register-form.component.ts

import { Component } from '@angular/core';
import { User } from '../../../../models/user.model'; // Import the User model
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    reTypePassword: '',
    roles: ['ROLE_USER'], // Default role
    isActive: true
  };

  errorMessage: string | null = null;
  selectedRole: string = 'ROLE_USER';  // Variable pour stocker le rôle sélectionné temporairement

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.errorMessage = 'Veuillez remplir correctement tous les champs du formulaire.';
      return;
    }
    
    if (this.user.password !== this.user.reTypePassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }

    // Mettre à jour le rôle de l'utilisateur avant d'envoyer les données
    this.user.roles = [this.selectedRole];  // Associer le rôle sélectionné à l'utilisateur

    this.authService.register(this.user).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMessage = 'Une erreur est survenue lors de votre inscription, veuillez réessayer.';
      }
    );
  }
}
