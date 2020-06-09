import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { QuillModule } from 'ngx-quill'

import { ResumeManagementRoutingModule } from './resume-management-routing.module';
import { ViewResumeComponent } from './components/view-resume/view-resume.component';
import { UserManagementModule } from '../user-management/user-management.module';
import { ResumeAddContactComponent } from './components/resume-add-contact/resume-add-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResumeService } from './services/resume.service';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { SafePipe } from '../pipes/safe-pipe';
import { ResumeAddSkillComponent } from './components/resume-add-skill/resume-add-skill.component';
import { ResumeAddLanguageComponent } from './components/resume-add-language/resume-add-language.component';
import { ResumeAddExperienceComponent } from './components/resume-add-experience/resume-add-experience.component';
import { ResumeAddEducationComponent } from './components/resume-add-education/resume-add-education.component';
import { ResumeAddProjectsComponent } from './components/resume-add-projects/resume-add-projects.component';
import { ResumeEditValueStatementComponent } from './components/resume-edit-value-statement/resume-edit-value-statement.component';


@NgModule({
  declarations: [
    ViewResumeComponent,
    ResumeAddContactComponent,
    FileUploadComponent,
    SafePipe,
    ResumeAddSkillComponent,
    ResumeAddLanguageComponent,
    ResumeAddExperienceComponent,
    ResumeAddEducationComponent,
    ResumeAddProjectsComponent,
    ResumeEditValueStatementComponent
  ],
  imports: [
    CommonModule,
    ResumeManagementRoutingModule,
    HttpClientModule,
    UserManagementModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    QuillModule.forRoot()
  ],
  providers: [ResumeService]
})
export class ResumeManagementModule { }
