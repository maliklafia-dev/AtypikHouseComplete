import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgvContentComponent } from './cgv-content.component';

describe('CgvContentComponent', () => {
  let component: CgvContentComponent;
  let fixture: ComponentFixture<CgvContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CgvContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CgvContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
