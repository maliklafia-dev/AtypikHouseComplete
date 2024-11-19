import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCookieConsentComponent } from './home-cookie-consent.component';

describe('HomeCookieConsentComponent', () => {
  let component: HomeCookieConsentComponent;
  let fixture: ComponentFixture<HomeCookieConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCookieConsentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCookieConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
