import { Component, OnInit } from '@angular/core';
import { Role } from '../../../../../models/role.model';
import { RoleService } from '../../../../../services/role.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin-role-detail',
  templateUrl: './dashboard-admin-role-detail.component.html',
  styleUrl: './dashboard-admin-role-detail.component.css'
})
export class DashboardAdminRoleDetailComponent implements OnInit {
  role: Role | undefined;

  constructor(private roleService: RoleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const roleId = this.route.snapshot.paramMap.get('id');
    if (roleId) {
      this.roleService.getRole(+roleId).subscribe(role => {
        this.role = role;
      });
    }
  }
}
