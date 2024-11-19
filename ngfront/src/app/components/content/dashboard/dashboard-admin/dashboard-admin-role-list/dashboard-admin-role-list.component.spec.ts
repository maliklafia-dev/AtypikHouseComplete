import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminRoleListComponent } from './dashboard-admin-role-list.component';

describe('DashboardAdminRoleListComponent', () => {
  let component: DashboardAdminRoleListComponent;
  let fixture: ComponentFixture<DashboardAdminRoleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardAdminRoleListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardAdminRoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
