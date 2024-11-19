import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesPolicyContentComponent } from './cookies-policy-content.component';

describe('CookiesPolicyContentComponent', () => {
  let component: CookiesPolicyContentComponent;
  let fixture: ComponentFixture<CookiesPolicyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CookiesPolicyContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookiesPolicyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
