import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEditValueStatementComponent } from './resume-edit-value-statement.component';

describe('ResumeEditValueStatementComponent', () => {
  let component: ResumeEditValueStatementComponent;
  let fixture: ComponentFixture<ResumeEditValueStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeEditValueStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeEditValueStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
