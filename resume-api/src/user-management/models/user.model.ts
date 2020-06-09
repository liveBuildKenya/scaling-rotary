import * as mongoose from 'mongoose';
import { BaseModel } from 'src/shared/models/base.model';
import { ExperienceSchema } from './experience.model';
import { EducationSchema } from './education.model';
import { ProjectSchema } from './project.model';

/**
 * Represents the user schema
 */
export const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    contacts: [{ contactType: String, contactValue: String}],
    introduction: { videoId: String, posterId: String, valueStatement: String, languages: [{ name: String, level: Number }] },
    experience: [ExperienceSchema],
    skills: [{name: String}],
    education: [EducationSchema],
    projects: [ProjectSchema],
    dateCreated: { type: Date },
    dateUpdated: { type: Date, default: Date.now }
});

/**
 * Represents a user model
 */
export interface UserModel extends BaseModel {
    
    /**
     * Gets or sets the name
     */
    name: string;

    /**
     * Gets or sets the email
     */
    email: string;

    /**
     * Gets or sets the password
     */
    password: string; 
}