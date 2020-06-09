import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAddProjectsComponent } from './resume-add-projects.component';

describe('ResumeAddProjectsComponent', () => {
  let component: ResumeAddProjectsComponent;
  let fixture: ComponentFixture<ResumeAddProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeAddProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAddProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
