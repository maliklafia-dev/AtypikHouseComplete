// src/app/components/cancel/cancel.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css'],
})
export class CancelComponent {
  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
