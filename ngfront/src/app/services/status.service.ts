import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Status } from '../models/status.model';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private apiUrl = 'https://dsp-devo22b-jg-sr-ml-my.net/api/statuses'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Helper method to get the headers with the authorization token and correct Content-Type
  private getAuthHeaders(
    contentType: string = 'application/ld+json'
  ): HttpHeaders {
    const token = localStorage.getItem('token'); // Ensure you are storing the token in localStorage
    return new HttpHeaders({
      'Content-Type': contentType, // This is the correct content-type for API Platform
      Authorization: `Bearer ${token}`, // Add the token to the headers, if available
    });
  }

  // Error handling function
  private handleError(error: HttpErrorResponse) {
    console.error('Server error:', error);
    return throwError(
      'Something went wrong with the request; please try again later.'
    );
  }

  // Fetch all statuses
  getStatuses(): Observable<Status[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Status[]>(this.apiUrl, { headers }).pipe(
      catchError(this.handleError) // Catch errors in the request
    );
  }

  // Fetch a single status by ID
  getStatus(id: number): Observable<Status> {
    const headers = this.getAuthHeaders();
    return this.http
      .get<Status>(`${this.apiUrl}/${id}`, { headers })
      .pipe(catchError(this.handleError));
  }

  // Create a new status
  createStatus(status: Status): Observable<Status> {
    const headers = this.getAuthHeaders();
    return this.http
      .post<Status>(this.apiUrl, status, { headers })
      .pipe(catchError(this.handleError));
  }

  // Update a status
  updateStatus(id: number, status: Status): Observable<Status> {
    const headers = this.getAuthHeaders();
    return this.http
      .put<Status>(`${this.apiUrl}/${id}`, status, { headers })
      .pipe(catchError(this.handleError));
  }

  // Delete a status
  deleteStatus(id: number): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`, { headers })
      .pipe(catchError(this.handleError));
  }
}
