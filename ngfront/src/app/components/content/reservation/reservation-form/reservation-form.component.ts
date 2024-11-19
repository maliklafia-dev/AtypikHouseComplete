import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../../../../services/reservation.service';
import { Reservation } from '../../../../models/reservation.model';
import { UserService } from '../../../../services/user.service';
import { HabitatService } from '../../../../services/habitat.service';
import { StatusService } from '../../../../services/status.service';
import { User } from '../../../../models/user.model';
import { Habitat } from '../../../../models/habitat.model';
import { Status } from '../../../../models/status.model';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
  reservation: Reservation = {
    startDate: new Date(),
    endDate: new Date(),
    totalPrice: 0,
    user: {} as User,
    habitat: {} as Habitat,
    status: {} as Status,
  };
  isEditMode = false;

  users: User[] = []; // To store users from API
  habitats: Habitat[] = []; // To store habitats from API
  statuses: Status[] = []; // To store statuses from API

  constructor(
    private reservationService: ReservationService,
    private userService: UserService,
    private habitatService: HabitatService,
    private statusService: StatusService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadRelatedData(); // Load Users, Habitats, Statuses

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadReservation(parseInt(id));
    }
  }

  // Load related data (users, habitats, statuses) for dropdown selection
  loadRelatedData(): void {
    this.userService.getUsers().subscribe(
      (data) => (this.users = data),
      (error) => console.error('Error loading users', error)
    );

    this.habitatService.getHabitats().subscribe(
      (data) => (this.habitats = data),
      (error) => console.error('Error loading habitats', error)
    );

    this.statusService.getStatuses().subscribe(
      (data) => (this.statuses = data),
      (error) => console.error('Error loading statuses', error)
    );
  }

  loadReservation(id: number): void {
    this.reservationService.getReservation(id).subscribe(
      (data) => (this.reservation = data),
      (error) => console.error('Error fetching reservation', error)
    );
  }

  saveReservation(): void {
    if (this.isEditMode) {
      this.reservationService.updateReservation(this.reservation.id!, this.reservation).subscribe(
        () => this.router.navigate(['/reservations']),
        (error) => console.error('Error updating reservation', error)
      );
    } else {
      this.reservationService.createReservation(this.reservation).subscribe(
        () => this.router.navigate(['/reservations']),
        (error) => console.error('Error creating reservation', error)
      );
    }
  }
}
