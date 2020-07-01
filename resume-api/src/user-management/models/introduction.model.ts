import { Schema } from "mongoose";
import { BaseModel } from "src/shared/models/base.model";

export const IntroductionSchema = new Schema({
    videoId: String,
    posterId: String,
    dateCreated: { type: Date },
    dateUpdated: { type: Date, default: Date.now }
});

export interface IntroductionModel extends BaseModel {
    videoId: string;
    posterId: string;
}