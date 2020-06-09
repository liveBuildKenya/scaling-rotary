import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAddEducationComponent } from './resume-add-education.component';

describe('ResumeAddEducationComponent', () => {
  let component: ResumeAddEducationComponent;
  let fixture: ComponentFixture<ResumeAddEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeAddEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAddEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
