import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../../../services/reservation.service';
import { Reservation } from '../../../../models/reservation.model';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css'], // Corrected "styleUrl" to "styleUrls"
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  // Fetch all reservations
  loadReservations(): void {
    this.reservationService.getReservations().subscribe(
      (data: any) => {
        // Assuming the API response is in 'hydra:member'
        this.reservations = data['hydra:member'] || [];
      },
      (error) => {
        console.error('Error fetching reservations', error);
      }
    );
  }

  // Delete a reservation by ID
  deleteReservation(id: number): void {
    this.reservationService.deleteReservation(id).subscribe(
      () => {
        // Reload the reservations after a successful delete
        this.loadReservations();
      },
      (error) => {
        console.error('Error deleting reservation', error);
      }
    );
  }
}
