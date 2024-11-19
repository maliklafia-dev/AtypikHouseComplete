import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAllCategoriesComponent } from './cat-all-categories.component';

describe('CatAllCategoriesComponent', () => {
  let component: CatAllCategoriesComponent;
  let fixture: ComponentFixture<CatAllCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatAllCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatAllCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
