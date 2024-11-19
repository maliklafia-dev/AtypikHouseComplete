import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppartComponent } from './add-appart.component';

describe('AddAppartComponent', () => {
  let component: AddAppartComponent;
  let fixture: ComponentFixture<AddAppartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAppartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAppartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
