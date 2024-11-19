import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminRoleDetailComponent } from './dashboard-admin-role-detail.component';

describe('DashboardAdminRoleDetailComponent', () => {
  let component: DashboardAdminRoleDetailComponent;
  let fixture: ComponentFixture<DashboardAdminRoleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardAdminRoleDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardAdminRoleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
