import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppartProfileDropdownComponent } from './add-appart-profile-dropdown.component';

describe('AddAppartProfileDropdownComponent', () => {
  let component: AddAppartProfileDropdownComponent;
  let fixture: ComponentFixture<AddAppartProfileDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAppartProfileDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAppartProfileDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
