// src/app/components/admin-dashboard/admin-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../services/user.service';
import { User } from '../../../../../models/user.model';

@Component({
  selector: 'app-dashboard-admin-user',
  templateUrl: './dashboard-admin-user.component.html',
  styleUrls: ['./dashboard-admin-user.component.css'],
})
export class DashboardAdminUserComponent implements OnInit {
  users: User[] = [];
  editingUser: User | null = null;
  editMode = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  // Load all users
  loadUsers() {
    this.userService.getUsers().subscribe(
      (response) => {
        if (Array.isArray(response)) {
          // If the response is directly an array
          this.users = response;
        } else if (response && response['hydra:member']) {
          // If the array is nested within 'hydra:member' (API Platform format)
          this.users = response['hydra:member'];
        } else {
          // If the response format is unexpected
          console.error('Unexpected API response format:', response);
          this.users = []; // Set to an empty array to avoid errors
        }
        console.log(this.users); // Log to check the loaded users
      },
      (error) => {
        console.error('Error loading users', error);
      }
    );

  }

  // Create or update a user
  saveUser() {
    if (this.editingUser) {
      if (this.editMode) {
        // Update existing user
        this.userService.updateUser(this.editingUser.id!, this.editingUser).subscribe(
          () => this.loadUsers(),
          (error) => console.error('Error updating user', error)
        );
      } else {
        // Create new user
        this.userService.createUser(this.editingUser).subscribe(
          () => this.loadUsers(),
          (error) => console.error('Error creating user', error)
        );
      }
      this.cancelEdit();
    }
  }

  // Set up user to edit
  editUser(user: User) {
    this.editingUser = { ...user };
    this.editMode = true;
  }

  // Delete a user
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      () => this.loadUsers(),
      (error) => console.error('Error deleting user', error)
    );
  }

  // Cancel edit mode
  cancelEdit() {
    this.editingUser = null;
    this.editMode = false;
  }
}
