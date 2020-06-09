/**
 * Represents an add education view model
 */
export interface AddEducationViewModel {

    /**
     * Gets or sets the user identifier
     */
    userId: string;

    /**
     * Gets or sets the school
     */
    school: string;

    /**
     * Gets or sets the degree
     */
    degree: string;

    /**
     * Gets or sets the date from
     */
    from: string;

    /**
     * Gets or sets the date to
     */
    to: string;
}