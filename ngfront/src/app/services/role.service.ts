import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private apiUrl = 'https://dsp-devo22b-jg-sr-ml-my.net/api/roles'; // Lien vers ton API

  constructor(private http: HttpClient) {}

  // Récupérer tous les rôles
  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl);
  }

  // Récupérer un rôle par ID
  getRole(id: number): Observable<Role> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Role>(url);
  }

  // Créer un nouveau rôle
  createRole(role: Role): Observable<Role> {
    return this.http.post<Role>(this.apiUrl, role, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // Mettre à jour un rôle
  updateRole(role: Role): Observable<Role> {
    const url = `${this.apiUrl}/${role.id}`;
    return this.http.put<Role>(url, role, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // Supprimer un rôle
  deleteRole(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
