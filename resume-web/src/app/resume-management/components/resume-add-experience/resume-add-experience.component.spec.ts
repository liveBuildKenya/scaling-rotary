import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAddExperienceComponent } from './resume-add-experience.component';

describe('ResumeAddExperienceComponent', () => {
  let component: ResumeAddExperienceComponent;
  let fixture: ComponentFixture<ResumeAddExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeAddExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAddExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
