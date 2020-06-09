import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAddSkillComponent } from './resume-add-skill.component';

describe('ResumeAddSkillComponent', () => {
  let component: ResumeAddSkillComponent;
  let fixture: ComponentFixture<ResumeAddSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeAddSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAddSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
