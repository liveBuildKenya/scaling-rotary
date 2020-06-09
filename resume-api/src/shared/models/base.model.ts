import { Document } from 'mongoose';

export interface BaseModel extends Document {
    /**
     * Gets or sets the date entity was created
     */
    dateCreated: Date,

    /**
     * Gets or sets the date entity was updated
     */
    dateUpdated: Date
}