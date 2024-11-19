import { Component, OnInit } from '@angular/core';
import { Role } from '../../../../../models/role.model';
import { RoleService } from '../../../../../services/role.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin-role-form',
  templateUrl: './dashboard-admin-role-form.component.html',
  styleUrl: './dashboard-admin-role-form.component.css'
})
export class DashboardAdminRoleFormComponent implements OnInit {
  role!: Role;
  isEditMode = false;

  constructor(private roleService: RoleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const roleId = this.route.snapshot.paramMap.get('id');
    if (roleId) {
      this.isEditMode = true;
      this.roleService.getRole(+roleId).subscribe(role => {
        this.role = role;
      });
    }
  }

  saveRole(): void {
    if (this.isEditMode) {
      this.roleService.updateRole(this.role).subscribe();
    } else {
      this.roleService.createRole(this.role).subscribe();
    }
  }
}
