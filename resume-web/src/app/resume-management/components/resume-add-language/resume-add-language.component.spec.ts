import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAddLanguageComponent } from './resume-add-language.component';

describe('ResumeAddLanguageComponent', () => {
  let component: ResumeAddLanguageComponent;
  let fixture: ComponentFixture<ResumeAddLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeAddLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAddLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
