import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatHeaderComponent } from './cat-header.component';

describe('CatHeaderComponent', () => {
  let component: CatHeaderComponent;
  let fixture: ComponentFixture<CatHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
