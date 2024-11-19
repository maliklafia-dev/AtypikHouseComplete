import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOwnerAppartComponent } from './view-owner-appart.component';

describe('ViewOwnerAppartComponent', () => {
  let component: ViewOwnerAppartComponent;
  let fixture: ComponentFixture<ViewOwnerAppartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOwnerAppartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewOwnerAppartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
