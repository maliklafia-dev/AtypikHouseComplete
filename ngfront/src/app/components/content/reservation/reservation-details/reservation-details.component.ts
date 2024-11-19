import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../../../../services/reservation.service';
import { Reservation } from '../../../../models/reservation.model';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css'],
})
export class ReservationDetailsComponent implements OnInit {
  reservation?: Reservation;

  constructor(
    private reservationService: ReservationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadReservation(parseInt(id));
    }
  }

  loadReservation(id: number): void {
    this.reservationService.getReservation(id).subscribe(
      (data) => (this.reservation = data),
      (error) => console.error('Error fetching reservation', error)
    );
  }
}
