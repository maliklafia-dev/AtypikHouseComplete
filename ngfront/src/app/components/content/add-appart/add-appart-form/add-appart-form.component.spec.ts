import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHabitatFormComponent } from './add-appart-form.component';

describe('AddAppartFormComponent', () => {
  let component: AddHabitatFormComponent;
  let fixture: ComponentFixture<AddHabitatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddHabitatFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddHabitatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
