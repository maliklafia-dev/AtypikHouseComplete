import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOwnerAppartProfileMenuComponent } from './view-owner-appart-profile-menu.component';

describe('ViewOwnerAppartProfileMenuComponent', () => {
  let component: ViewOwnerAppartProfileMenuComponent;
  let fixture: ComponentFixture<ViewOwnerAppartProfileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOwnerAppartProfileMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewOwnerAppartProfileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
