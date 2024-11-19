// src/app/services/avis.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avis } from '../models/avis.model';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private apiUrl = 'https://dsp-devo22b-jg-sr-ml-my.net/api/aviss'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Get all comments for a habitat
  getCommentsByHabitat(id: number): Observable<Avis[]> {
    return this.http.get<Avis[]>(`${this.apiUrl}?id=${id}`);
  }

  // Get a specific comment by ID
  getCommentById(id: number): Observable<Avis> {
    return this.http.get<Avis>(`${this.apiUrl}/${id}`);
  }

  // Post a new comment
  createComment(avis: Avis): Observable<Avis> {
    return this.http.post<Avis>(this.apiUrl, avis);
  }

  // Update an existing comment
  updateComment(id: number, avis: Avis): Observable<Avis> {
    return this.http.put<Avis>(`${this.apiUrl}/${id}`, avis);
  }

  // Delete a comment
  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
