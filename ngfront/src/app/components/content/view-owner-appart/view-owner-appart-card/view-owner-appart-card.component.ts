import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-view-owner-appart-card',
  templateUrl: './view-owner-appart-card.component.html',
  styleUrl: './view-owner-appart-card.component.css'
})
export class ViewOwnerAppartCardComponent {
  @Input() apartment!: any;

  constructor() { }

  manageApartment() {
    // Logic for managing the apartment (edit, delete, mark unavailable)
  }
}
