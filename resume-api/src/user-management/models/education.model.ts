import * as mongoose from 'mongoose';

/**
 * Represents an education schema
 */
export const EducationSchema = new mongoose.Schema({
    /**
     * Gets or sets the school
     */
    school: String,

    /**
     * Gets or sets the field of study
     */
    fieldOfStudy: String,

    /**
     * Gets or sets the degree
     */
    degree: String,

    /**
     * Gets or sets the year from
     */
    from: String,

    /**
     * Gets or sets the year to
     */
    to: String
})