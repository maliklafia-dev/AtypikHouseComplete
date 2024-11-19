import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartListComponent } from './appart-list.component';

describe('AppartListComponent', () => {
  let component: AppartListComponent;
  let fixture: ComponentFixture<AppartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppartListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
