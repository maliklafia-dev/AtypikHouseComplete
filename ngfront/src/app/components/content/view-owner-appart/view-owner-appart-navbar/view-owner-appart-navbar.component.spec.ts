import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOwnerAppartNavbarComponent } from './view-owner-appart-navbar.component';

describe('ViewOwnerAppartNavbarComponent', () => {
  let component: ViewOwnerAppartNavbarComponent;
  let fixture: ComponentFixture<ViewOwnerAppartNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOwnerAppartNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewOwnerAppartNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
