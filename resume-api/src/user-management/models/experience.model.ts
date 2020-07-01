import * as mongoose from 'mongoose';
import { BaseModel } from 'src/shared/models/base.model';

/**
 * Represents an experience
 */
export const ExperienceSchema = new mongoose.Schema({
    title: String,
    companyName: String,
    description: String,
    industry: String,
    country: String,
    from: String,
    to: String,
    currentWorkPlace: Boolean,
    dateCreated: { type: Date },
    dateUpdated: { type:Date, default: Date.now}
});

export interface ExperienceModel extends BaseModel {
    title: string,
    companyName: string,
    description: string,
    industry: string,
    country: string,
    from: string,
    to: string,
    currentWorkPlace: boolean,
}