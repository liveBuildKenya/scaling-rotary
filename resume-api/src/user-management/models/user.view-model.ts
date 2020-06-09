/**
 * Represents the recieved user
 */
export interface UserViewModel {

    /**
     * Gets or sets the name
     */
    name: string;

    /**
     * Gets or sets the email
     */
    email: string;

    /**
     * Gets or sets the password
     */
    password: string;

    /**
     * Gets or sets the date created
     */
    dateCreated: Date;
}