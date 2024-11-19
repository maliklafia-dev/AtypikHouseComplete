import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service'; // Correct path to your service
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {

  // Object to hold email and password from the form
  credentials: { email: string; password: string } = {
    email: '',
    password: '',
  };

  // Holds an error message if the login fails
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  // Method triggered when form is submitted
  onSubmit(): void {
    // Call the login method from the AuthService and subscribe to the result
    this.authService.login(this.credentials).subscribe(
      (response) => {
        // If login is successful, navigate to the '/admin' route (or another route as needed)
        this.router.navigate(['/']);
      },
      (error) => {
        // If there's an error (e.g., invalid credentials), set an error message
        this.errorMessage = 'Informations de connexion invalides.';
      }
    );
  }
}
