import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartByIdComponent } from './appart-by-id.component';

describe('AppartByIdComponent', () => {
  let component: AppartByIdComponent;
  let fixture: ComponentFixture<AppartByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppartByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppartByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
