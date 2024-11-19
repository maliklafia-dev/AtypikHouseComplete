import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminUserComponent } from './dashboard-admin-user.component';

describe('DashboardAdminUserComponent', () => {
  let component: DashboardAdminUserComponent;
  let fixture: ComponentFixture<DashboardAdminUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardAdminUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardAdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
