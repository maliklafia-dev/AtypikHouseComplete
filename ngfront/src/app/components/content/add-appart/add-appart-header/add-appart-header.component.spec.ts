import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppartHeaderComponent } from './add-appart-header.component';

describe('AddAppartHeaderComponent', () => {
  let component: AddAppartHeaderComponent;
  let fixture: ComponentFixture<AddAppartHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAppartHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAppartHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
