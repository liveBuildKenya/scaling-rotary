import * as mongoose from 'mongoose';

/**
 * Represents a project
 */
export const ProjectSchema = new mongoose.Schema({
    /**
     * Gets or sets the name
     */
    name: String,

    /**
     * Gets or sets the date
     */
    date: Date,

    /**
     * Gets or sets the url
     */
    url: String,

    /**
     * Gets or sets the description
     */
    description: String,

    /**
     * Gets or sets a value indicating whether the projects is ongoing
     */
    ongoing: Boolean
})