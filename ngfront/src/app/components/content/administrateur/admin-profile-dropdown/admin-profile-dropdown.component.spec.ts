import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileDropdownComponent } from './admin-profile-dropdown.component';

describe('AdminProfileDropdownComponent', () => {
  let component: AdminProfileDropdownComponent;
  let fixture: ComponentFixture<AdminProfileDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminProfileDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminProfileDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
