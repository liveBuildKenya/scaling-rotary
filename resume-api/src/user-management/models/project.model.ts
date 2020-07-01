import * as mongoose from 'mongoose';
import { BaseModel } from 'src/shared/models/base.model';

/**
 * Represents a project
 */
export const ProjectSchema = new mongoose.Schema({
    name: String,
    date: Date,
    url: String,
    description: String,
    ongoing: Boolean,
    dateCreated: { type: Date },
    dateUpdated: { type: Date, default: Date.now }
});

export interface ProjectModel extends BaseModel {
    name: string;
    date: Date;
    url: string;
    description: string;
    ongoing: boolean;
}