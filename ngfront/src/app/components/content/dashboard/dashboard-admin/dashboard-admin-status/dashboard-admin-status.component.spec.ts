import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminStatusComponent } from './dashboard-admin-status.component';

describe('DashboardAdminStatusComponent', () => {
  let component: DashboardAdminStatusComponent;
  let fixture: ComponentFixture<DashboardAdminStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardAdminStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardAdminStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
