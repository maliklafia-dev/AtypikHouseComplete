import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { GetApiService } from './get-api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string;

  constructor(private http: HttpClient, private getApi: GetApiService) {
    this.apiUrl = this.getApi.getApi();
  }

  // Helper method to get the headers with the authorization token and correct Content-Type
  private getAuthHeaders(
    contentType: string = 'application/json'
  ): HttpHeaders {
    const token = localStorage.getItem('token'); // Ensure you are storing the token here
    return new HttpHeaders({
      'Content-Type': contentType,
      Authorization: `Bearer ${token}`, // Add the token to the headers
    });
  }

  // Get all users
  getUsers(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/users`, { headers });
  }

  // Create a new user
  createUser(user: User): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/users`, JSON.stringify(user), {
      headers,
    });
  }

  // Update an existing user
  updateUser(id: number, user: User): Observable<any> {
    const headers = this.getAuthHeaders('application/ld+json');
    return this.http
      .put(`${this.apiUrl}/users/${id}`, JSON.stringify(user), { headers })
      .pipe(
        catchError((error) => {
          console.error('Error updating user', error.error);
          return throwError(error);
        })
      );
  }

  // Delete a user
  deleteUser(id: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.delete(`${this.apiUrl}/users/${id}`, { headers });
  }
}
