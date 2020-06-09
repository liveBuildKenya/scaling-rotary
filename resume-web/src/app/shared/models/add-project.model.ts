/**
 * Represents an add project model
 */
export interface AddProjectModel {

  /**
   * Gets or sets the user identifier
   */
  userId: string;

  /**
   * Gets or sets the name
   */
  name: string;

  /**
   * Gets or sets the url
   */
  url: string;

  /**
   * Gets or sets the description
   */
  description: string;

  /**
   * Gets or sets a value indicating whether the project is ongoing
   */
  ongoing: boolean;
}
