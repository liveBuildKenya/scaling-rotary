/**
 * Represents user model
 */
export interface UserModel {

  /**
   * Gets or sets the id
   */
  _id: string;

  /**
   * Gets or sets the name
   */
  name: string;

  /**
   * Gets or sets the email
   */
  email: string;

  /**
   * Gets or sets the contacts
   */
  contacts: [{ contactType: string, contactValue: string}];

  /**
   * Gets or sets the introduction
   */
  introduction: { videoId: string, posterId: string, valueStatement: string, languages: UserLanguage[] };

  /**
   * Gets or sets the skills
   */
  skills: Array<UserSkill>;

  /**
   * Gets or sets the experience
   */
  experience: Array<UserExperience>;

  /**
   * Gets or sets the education
   */
  education: Array<UserEducation>;

  /**
   * Gets or sets the projects
   */
  projects: Array<UserProject>;
}

/**
 * Represents a user language
 */
export interface UserLanguage {

  /**
   * Gets or sets the identifier
   */
  _id: string;

  /**
   * Gets or sets the language name
   */
  name: string;

  /**
   * Gets or sets the level
   */
  level: number;
}

/**
 * Represents a user string
 */
export interface UserSkill {

  /**
   * Gets or sets the identifier
   */
  _id: string;

  /**
   * Gets or sets the name
   */
  name: string;
}

/**
 * Represents a user education
 */
export interface UserEducation {
  /**
   * Gets or sets the id
   */
  _id: string;

  /**
   * Gets or sets the school
   */
  school: string;

  /**
   * Gets or sets the degree
   */
  degree: string;

  /**
   * Gets or sets the month and year from
   */
  from: string;

  /**
   * Gets or sets the month and year to
   */
  to: string;
}

/**
 * Represents a users experience
 */
export interface UserExperience {

  /**
   * Gets or sets an identifier
   */
  _id: string;

  /**
   * Gets or sets the company name
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
   * Gets or sets the month and year from
   */
  from: string;

  /**
   * Gets or sets the month and year to
   */
  to: string;

  /**
   * Gets or sets the description
   */
  description: string;

  /**
   * Gets or sets a value indicating whether the it is current work place
   */
  currentWorkPlace: string;
}

/**
 * Represents a user project
 */
export interface UserProject {

  /**
   * Gets or sets a value indicating the name
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
