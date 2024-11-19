import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // This makes the service available throughout the app without needing to add it to providers array
})
export class GetApiService {

  // API URL for your backend
//  private apiUrl = 'https://localhost:8000/api'; // Using HTTP for local development
//  private apiUrl = 'https://dsp-devo22b-jg-sr-ml-my.net/api'; // Using HTTP for deploiement
  //private apiUrl = 'https://134.209.112.10:8000/api'; // Using HTTP for local development

  private apiUrl = 'https://localhost:8000/api';
  constructor() { }

  // Method to return the API URL
  getApi(): string {
    return this.apiUrl;
  }
}
