import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppartNavbarConnectedComponent } from './add-appart-navbar-connected.component';

describe('AddAppartNavbarConnectedComponent', () => {
  let component: AddAppartNavbarConnectedComponent;
  let fixture: ComponentFixture<AddAppartNavbarConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAppartNavbarConnectedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAppartNavbarConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
