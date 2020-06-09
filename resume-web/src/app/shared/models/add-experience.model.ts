/**
 * Represents an add experience model
 */
export interface AddExperienceModel {

  userId: string;

  /**
   * Gets or sets the title
   */
  title: string;

  /**
   * Gets or sets the compony name
   */
  companyName: string;

  /**
   * Gets or sets the industry
   */
  industry: string;

  /**
   * Gets or sets the country
   */
  country: string;

  /**
   * Gets or sets the month and year from
   */
  from: string;

  /**
   * Gets or sets the month and year to
   */
  to: string;

  /**
   * Gets or sets the experience
   */
  description: string;

  /**
   * Gets or sets a value indicating whether the workplace is current
   */
  current: boolean;
}
