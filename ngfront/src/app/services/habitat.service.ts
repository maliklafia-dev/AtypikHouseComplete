// habitat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitat } from '../models/habitat.model';  // Assuming you have a Habitat model defined
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HabitatService {
  // private apiUrl = 'https://dsp-devo22b-jg-sr-ml-my.net/api/habitats';  // Replace with your actual API URL
   private apiUrl = environment.apiUrl+"/habitats";  // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Fetch all habitats
  getHabitats(): Observable<Habitat[]> {
    return this.http.get<Habitat[]>(this.apiUrl);
  }
  // getHabitats(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/habitats?order[createdAt]=desc&limit=6`);
  // }

    // Service pour récupérer les 6 derniers habitats
    // getLatestHabitats(): Observable<Habitat[]> {
    //   return this.http.get<Habitat[]>(`${this.apiUrl}/latest`);
    // }


  // Fetch a habitat by ID
  getHabitatById(id: number): Observable<Habitat> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Habitat>(url);
  }

  // Nouvelle méthode pour récupérer une image via son @id
  getImage(imageId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${imageId}`);
  }
}
