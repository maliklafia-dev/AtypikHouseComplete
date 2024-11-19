import { Component, OnInit } from '@angular/core';
import { Role } from '../../../../../models/role.model';
import { RoleService } from '../../../../../services/role.service';

@Component({
  selector: 'app-dashboard-admin-role-list',
  templateUrl: './dashboard-admin-role-list.component.html',
  styleUrl: './dashboard-admin-role-list.component.css'
})
export class DashboardAdminRoleListComponent implements OnInit {
  roles: Role[] = [];

  constructor(private roleService: RoleService) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles() { 
    this.roleService.getRoles().subscribe(
      (response) => {
        if (Array.isArray(response)) {
          // Si la réponse est directement un tableau
          this.roles = response;
        } else if (response && response['hydra:member']) {
          // Si les rôles sont dans 'hydra:member' (format API Platform)
          this.roles = response['hydra:member'];
        } else {
          // Si le format de la réponse est inattendu
          console.error('Format de réponse API inattendu:', response);
          this.roles = []; // Définit à un tableau vide pour éviter les erreurs
        }
        console.log(this.roles); // Log pour vérifier les rôles chargés
      },
      (error) => {
        console.error('Erreur lors du chargement des rôles', error);
      }
    );
  }
  

  editRole(role: Role): void {
    // Rediriger vers le formulaire d'édition
  }

  deleteRole(id: number): void {
    this.roleService.deleteRole(id).subscribe(() => {
      this.roles = this.roles.filter(role => role.id !== id);
    });
  }
}
