import * as mongoose from 'mongoose';

/**
 * Represents an experience
 */
export const ExperienceSchema = new mongoose.Schema({
    /**
     * Gets or sets the title
     */
    title: String,

    /**
     * Gets or sets the company name
     */
    companyName: String,

    /**
     * Gets or sets the description
     */
    description: String,

    /**
     * Gets or sets the descrition
     */
    industry: String,

    /**
     * Gets or sets the country
     */
    country: String,

    /**
     * Gets or sets the month and the year from
     */
    from: String,

    /**
     * Gets or sets the month and the year to
     */
    to: String,

    /**
     * Gets or sets a value indicating whether this is the current work place
     */
    currentWorkPlace: Boolean
})