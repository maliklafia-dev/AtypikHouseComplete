import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatMoreCategoriesComponent } from './cat-more-categories.component';

describe('CatMoreCategoriesComponent', () => {
  let component: CatMoreCategoriesComponent;
  let fixture: ComponentFixture<CatMoreCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatMoreCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatMoreCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
