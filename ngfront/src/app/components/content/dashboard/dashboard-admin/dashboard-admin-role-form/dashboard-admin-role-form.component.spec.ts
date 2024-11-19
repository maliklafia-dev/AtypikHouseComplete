import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminRoleFormComponent } from './dashboard-admin-role-form.component';

describe('DashboardAdminRoleFormComponent', () => {
  let component: DashboardAdminRoleFormComponent;
  let fixture: ComponentFixture<DashboardAdminRoleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardAdminRoleFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardAdminRoleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
