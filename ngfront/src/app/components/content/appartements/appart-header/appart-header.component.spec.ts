import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartHeaderComponent } from './appart-header.component';

describe('AppartHeaderComponent', () => {
  let component: AppartHeaderComponent;
  let fixture: ComponentFixture<AppartHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppartHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppartHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
