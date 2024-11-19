import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../../../../services/status.service';
import { Status } from '../../../../../models/status.model';

@Component({
  selector: 'app-dashboard-admin-status',
  templateUrl: './dashboard-admin-status.component.html',
  styleUrl: './dashboard-admin-status.component.css'
})
export class DashboardAdminStatusComponent implements OnInit {
  statuses: Status[] = [];
  newStatus: Status = { title: '', slug: '' };
  selectedStatus: Status | null = null;
  errorMessage: string | null = null;

  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    this.fetchStatuses();
  }

  // Fetch all statuses
  fetchStatuses(): void {
    this.statusService.getStatuses().subscribe((data:any) => {
      if (data) {
        this.statuses = data['hydra:member'] || []; // This should be an array
      } else {
        console.error('Expected an array, but received an object');
      }
    });
  }

  // Create a new status
  createStatus(): void {
    this.statusService.createStatus(this.newStatus).subscribe(
      (status) => {
        this.statuses.push(status);
        this.newStatus = { title: '', slug: '' }; // Reset form
      },
      (error) => {
        this.errorMessage = 'Error creating status.';
        console.error(error);
      }
    );
  }

  // Select a status to edit
  editStatus(status: Status): void {
    this.selectedStatus = { ...status };
  }

  // Update the selected status
  updateStatus(): void {
    if (this.selectedStatus) {
      this.statusService.updateStatus(this.selectedStatus.id!, this.selectedStatus).subscribe(
        (updatedStatus) => {
          const index = this.statuses.findIndex((s) => s.id === updatedStatus.id);
          if (index !== -1) {
            this.statuses[index] = updatedStatus;
          }
          this.selectedStatus = null; // Reset selected status
        },
        (error) => {
          this.errorMessage = 'Error updating status.';
          console.error(error);
        }
      );
    }
  }

  // Delete a status
  deleteStatus(id: number): void {
    this.statusService.deleteStatus(id).subscribe(
      () => {
        this.statuses = this.statuses.filter((status) => status.id !== id);
      },
      (error) => {
        this.errorMessage = 'Error deleting status.';
        console.error(error);
      }
    );
  }

  // Cancel editing
  cancelEdit(): void {
    this.selectedStatus = null;
  }
}
