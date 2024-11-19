import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGoogleMapComponent } from './contact-google-map.component';

describe('ContactGoogleMapComponent', () => {
  let component: ContactGoogleMapComponent;
  let fixture: ComponentFixture<ContactGoogleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactGoogleMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
