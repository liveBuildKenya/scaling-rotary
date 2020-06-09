import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AddUserContactModel } from 'src/app/shared/models/add-user-contact.model';
import { AddUserLanguageModel } from 'src/app/shared/models/add-user-language.model';
import { EditValueStatementModel } from 'src/app/shared/models/edit-value-statement.model';
import { AddSkillModel } from 'src/app/shared/models/add-skill.model';
import { AddEducationModel } from 'src/app/shared/models/add-education.model';
import { AddExperienceModel } from 'src/app/shared/models/add-experience.model';
import { AddProjectModel } from 'src/app/shared/models/add-project.model';
@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private httpClient: HttpClient) { }

  addUserContact(addUserContact: AddUserContactModel) {
    return this.httpClient.post(`${environment.api_url}resume/contact/add`, addUserContact);
  }

  addUseLanguage(addUserLanguage: AddUserLanguageModel) {
    return this.httpClient.post(`${environment.api_url}resume/language/add`, addUserLanguage);
  }

  editValueStatement(valueStatement: EditValueStatementModel) {
    return this.httpClient.post(`${environment.api_url}resume/value-statement/edit`, valueStatement);
  }

  addSkill(newSkill: AddSkillModel) {
    return this.httpClient.post(`${environment.api_url}resume/skill/add`, newSkill);
  }

  addEducation(newEducation: AddEducationModel) {
    return this.httpClient.post(`${environment.api_url}resume/education/add`, newEducation);
  }

  addExperience(newExperience: AddExperienceModel) {
    return this.httpClient.post(`${environment.api_url}resume/experience/add`, newExperience);
  }

  addProject(newProject: AddProjectModel) {
    return this.httpClient.post(`${environment.api_url}resume/project/add`, newProject);
  }

  uploadVideo(videoData: FormData) {
    return this.httpClient.post(`${environment.api_url}resume/video/upload`, videoData);
  }

  uploadPoster(posterData: FormData) {
    return this.httpClient.post(`${environment.api_url}resume/poster/upload`, posterData);
  }
}
