import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeatureSectionComponent } from './admin-feature-section.component';

describe('AdminFeatureSectionComponent', () => {
  let component: AdminFeatureSectionComponent;
  let fixture: ComponentFixture<AdminFeatureSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFeatureSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminFeatureSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
