import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOwnerAppartCardComponent } from './view-owner-appart-card.component';

describe('ViewOwnerAppartCardComponent', () => {
  let component: ViewOwnerAppartCardComponent;
  let fixture: ComponentFixture<ViewOwnerAppartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOwnerAppartCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewOwnerAppartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
