import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOwnerAppartListComponent } from './view-owner-appart-list.component';

describe('ViewOwnerAppartListComponent', () => {
  let component: ViewOwnerAppartListComponent;
  let fixture: ComponentFixture<ViewOwnerAppartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOwnerAppartListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewOwnerAppartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
