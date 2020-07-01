import { Schema } from 'mongoose';
import { BaseModel } from 'src/shared/models/base.model';
import { ExperienceSchema, ExperienceModel } from './experience.model';
import { EducationSchema, EducationModel } from './education.model';
import { ProjectSchema, ProjectModel } from './project.model';
import { ContactSchema, ContactModel } from './contact.model';
import { IntroductionSchema, IntroductionModel } from './introduction.model';
import { SkillSchema, SkillModel } from './skill.model';
import { LanguageSchema, LanguageModel } from './language.model';

/**
 * Represents the user schema
 */
export const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    contacts: [ContactSchema],
    introduction: IntroductionSchema,
    languages: [LanguageSchema],
    valueStatement: String,
    experience: [ExperienceSchema],
    skills: [SkillSchema],
    education: [EducationSchema],
    projects: [ProjectSchema],
    dateCreated: { type: Date },
    dateUpdated: { type: Date, default: Date.now }
});

/**
 * Represents a user model
 */
export interface UserModel extends BaseModel {
    name: string;
    email: string;
    password: string; 
    contacts: Array<ContactModel>;
    introduction: IntroductionModel;
    languages: Array<LanguageModel>;
    valueStatement: string;
    experience: Array<ExperienceModel>;
    skills: Array<SkillModel>;
    education: Array<EducationModel>;
    projects: Array<ProjectModel>;
}