import { Schema } from "mongoose";
import { BaseModel } from "src/shared/models/base.model";

export const LanguageSchema = new Schema({
    language: String,
    level: Number,
    dateCreated: { type: Date },
    dateUpdated: { type: Date, default: Date.now }
});

export interface LanguageModel extends BaseModel {
    language: string;
    level: number;
}