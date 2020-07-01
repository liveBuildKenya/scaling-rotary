import { Schema } from 'mongoose';
import { BaseModel } from 'src/shared/models/base.model';

export const ContactSchema = new Schema({
    contactType: String,
    contactValue: String,
    dateCreated: { type: Date },
    dateUpdated: { type: Date, default: Date.now}
});

export interface ContactModel extends BaseModel {
    contactType: string;
    contactValue: string;
}