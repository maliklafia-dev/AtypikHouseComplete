import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = 'https://dsp-devo22b-jg-sr-ml-my.net/api/reservations'; // Your API URL

  constructor(private http: HttpClient) {}

  // Helper to set authorization headers
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Assuming JWT token is stored here
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Add JWT token to headers
    });
  }

  // Fetch all reservations
  getReservations(): Observable<Reservation[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Reservation[]>(this.apiUrl, { headers });
  }

  // Fetch a single reservation by ID
  getReservation(id: number): Observable<Reservation> {
    const headers = this.getAuthHeaders();
    return this.http.get<Reservation>(`${this.apiUrl}/${id}`, { headers });
  }

  // Create a new reservation
  createReservation(reservation: Reservation): Observable<Reservation> {
    const headers = this.getAuthHeaders();
    return this.http.post<Reservation>(this.apiUrl, reservation, { headers });
  }

  // Update an existing reservation
  updateReservation(
    id: number,
    reservation: Reservation
  ): Observable<Reservation> {
    const headers = this.getAuthHeaders();
    return this.http.put<Reservation>(`${this.apiUrl}/${id}`, reservation, {
      headers,
    });
  }

  // Delete a reservation
  deleteReservation(id: number): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }

  makeReservation(reservation: Reservation): Observable<any> {
    return this.http.post(this.apiUrl, reservation);
  }
}
