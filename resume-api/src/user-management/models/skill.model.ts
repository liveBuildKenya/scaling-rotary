import { Schema } from "mongoose";
import { BaseModel } from "src/shared/models/base.model";

export const SkillSchema = new Schema({
    skill: String,
    dateCreated: { type: Date },
    dateUpdated: { type: Date, default: Date.now }
});

export interface SkillModel extends BaseModel{
    skill: string;
}