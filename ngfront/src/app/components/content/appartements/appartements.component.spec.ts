import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartementsComponent } from './appartements.component';

describe('AppartementsComponent', () => {
  let component: AppartementsComponent;
  let fixture: ComponentFixture<AppartementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppartementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
