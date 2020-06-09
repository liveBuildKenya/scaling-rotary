import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAddContactComponent } from './resume-add-contact.component';

describe('ResumeAddContactComponent', () => {
  let component: ResumeAddContactComponent;
  let fixture: ComponentFixture<ResumeAddContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeAddContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
