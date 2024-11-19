import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminRoleComponent } from './dashboard-admin-role.component';

describe('DashboardAdminRoleComponent', () => {
  let component: DashboardAdminRoleComponent;
  let fixture: ComponentFixture<DashboardAdminRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardAdminRoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardAdminRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
