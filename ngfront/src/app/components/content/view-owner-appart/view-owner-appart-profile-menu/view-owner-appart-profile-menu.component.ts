import { Component } from '@angular/core';

@Component({
  selector: 'app-view-owner-appart-profile-menu',
  templateUrl: './view-owner-appart-profile-menu.component.html',
  styleUrl: './view-owner-appart-profile-menu.component.css'
})
export class ViewOwnerAppartProfileMenuComponent {
  userName = 'Malik';
  constructor() { }

  logout() {
    // Logic for logging out the user
  }
}
