import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDetailAppartComponent } from './comment-detail-appart.component';

describe('CommentDetailAppartComponent', () => {
  let component: CommentDetailAppartComponent;
  let fixture: ComponentFixture<CommentDetailAppartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentDetailAppartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentDetailAppartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
