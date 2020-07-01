import * as mongoose from 'mongoose';
import { BaseModel } from 'src/shared/models/base.model';

/**
 * Represents an education schema
 */
export const EducationSchema = new mongoose.Schema({
    school: String,
    fieldOfStudy: String,
    degree: String,
    from: String,
    to: String,
    dateCreated: { type: Date },
    dateUpdated: { type: Date, default: Date.now }
});

export interface EducationModel extends BaseModel {
    school: string;
    fieldOfStudy: string;
    degree: string;
    from: string;
    to: string;
}