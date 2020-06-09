/**
 * Represents an add user experience view model
 */
export interface AddExperienceViewModel {

    /**
     * Gets or sets the user identifier
     */
    userId: string;

    /**
     * Gets or sets the copmpany name
     */
    companyName: string;

    /**
     * Gets or sets the title
     */
    title: string;

    /**
     * Gets or sets the industry
     */
    industry: string;

    /**
     * Gets or sets the country
     */
    country: string;

    /**
     * Gets or sets month and year form
     */
    from: string;

    /**
     * Gets or sets the monthe and year to
     */
    to: string;

    /**
     * Gets or sets the description
     */
    description: string;

    /**
     * Gets or sets a value indicating whether the workplace is current
     */
    current: boolean;
}