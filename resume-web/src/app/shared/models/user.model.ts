/**
 * Represents user model
 */
export interface UserModel {
  _id: string;
  name: string;
  email: string;
  contacts: [{
    contactType: string,
    contactValue: string,
    dateCreated: Date,
    dateUpdated: Date,
    _id: string
  }];
  valueStatement: string;
  languages: UserLanguage[];
  introduction: {
    videoId: string,
    posterId: string,
  };
  skills: Array<UserSkill>;
  experience: Array<UserExperience>;
  education: Array<UserEducation>;
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
  language: string;

  /**
   * Gets or sets the level
   */
  level: number;
}

/**
 * Represents a user string
 */
export interface UserSkill {
  _id: string;
  skill: string;
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
