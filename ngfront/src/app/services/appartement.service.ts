import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appartement } from '../models/appartement.model';

@Injectable({
  providedIn: 'root',
})
export class AppartementService {
  private apiUrl = 'https://dsp-devo22b-jg-sr-ml-my.net/api/habitats'; // Adjust to your API URL

  constructor(private http: HttpClient) {}

  getAppartements(): Observable<Appartement[]> {
    return this.http.get<Appartement[]>(this.apiUrl);
  }
}
