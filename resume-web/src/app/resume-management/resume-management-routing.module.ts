import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewResumeComponent } from './components/view-resume/view-resume.component';
import { ResumeAddContactComponent } from './components/resume-add-contact/resume-add-contact.component';
import { ResumeAddLanguageComponent } from './components/resume-add-language/resume-add-language.component';
import { ResumeAddSkillComponent } from './components/resume-add-skill/resume-add-skill.component';
import { ResumeAddExperienceComponent } from './components/resume-add-experience/resume-add-experience.component';
import { ResumeAddProjectsComponent } from './components/resume-add-projects/resume-add-projects.component';
import { ResumeAddEducationComponent } from './components/resume-add-education/resume-add-education.component';
import { ResumeEditValueStatementComponent } from './components/resume-edit-value-statement/resume-edit-value-statement.component';


const routes: Routes = [
  {
    path: ':id',
    component: ViewResumeComponent,
    runGuardsAndResolvers: 'always',
    children: [
      { path: 'contact/add', component: ResumeAddContactComponent },
      { path: 'statement/edit', component: ResumeEditValueStatementComponent },
      { path: 'language/add', component: ResumeAddLanguageComponent },
      { path: 'skill/add', component: ResumeAddSkillComponent },
      { path: 'experience/add', component: ResumeAddExperienceComponent },
      { path: 'education/add', component: ResumeAddEducationComponent },
      { path: 'project/add', component: ResumeAddProjectsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeManagementRoutingModule { }
