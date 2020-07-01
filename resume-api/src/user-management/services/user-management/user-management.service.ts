import { Injectable, HttpStatus } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { UserViewModel } from 'src/user-management/models/user.view-model';
import { UploadDetailsViewModel } from 'src/user-management/models/upload-details.view-model';
import { ResumeSection } from 'src/shared/enums/resume-section.enum';
import { AddLanguageViewModel } from 'src/user-management/models/add-langauge-view.model';
import { EditValueStatementViewModel } from 'src/user-management/models/edit-value-statement.view-model';
import { AddSkillViewModel } from 'src/user-management/models/add-skill.view-model';
import { AddEducationViewModel } from 'src/user-management/models/add-education.view-model';
import { AddExperienceViewModel } from 'src/user-management/models/add-experience.view-model';
import { AddProjectViewModel } from 'src/user-management/models/add-project.view-model';
import { AddContactViewModel } from 'src/user-management/models/add-contact-view.model';
import { ContactService } from '../contact/contact.service';
import { LanguageService } from '../language/language.service';
import { SkillService } from '../skill/skill.service';
import { EducationService } from '../education/education.service';
import { ExperienceService } from '../experience/experience.service';
import { ProjectService } from '../project/project.service';
import { IntroductionService } from '../introduction/introduction.service';

@Injectable()
export class UserManagementService {

    constructor(private userService: UserService,
                private introductionService: IntroductionService,
                private contactService: ContactService,
                private languageService: LanguageService,
                private skillService: SkillService,
                private educationService: EducationService,
                private experienceService: ExperienceService,
                private projectService: ProjectService,
                private jwtService: JwtService) {}
    /**
     * Creates a new user
     * 
     * @param userViewModel Represents a user view model interface
     */
    async register(userViewModel: UserViewModel) {

        if (!userViewModel.email) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: "Email not specified",
                    result: userViewModel
                }
            }
        }

        if (!userViewModel.name) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: "Name not specified",
                    result: userViewModel
                }
            }
        }

        if (!userViewModel.password) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: "Password not specified",
                    result: userViewModel
                }
            }
        }        

        if ((await this.userService.getUserByEmail(userViewModel.email))) {

            const {password, ...value } = userViewModel;

            return {
                status: HttpStatus.METHOD_NOT_ALLOWED,
                body: {
                    message: 'User already exists',
                    result: value
                }
            };
        }

        userViewModel.password = bcrypt.hashSync(userViewModel.password, 12);

        return {
            status: HttpStatus.OK,
            body: {
                message: 'User registered successfully',
                result: { 
                    token: (await this.jwtService.sign({ email: userViewModel.email })),
                    user: (await this.userService.create(userViewModel))
                }
            }
        };
    }

    /**
     * Gets a user profile
     */
    async getUserProfile(currentUser: any){
        const user = await this.userService.getUserByEmail(currentUser.email);
        const {password, ...result } = user;
        return {
            status: HttpStatus.OK,
            body: {
                message: 'User profile',
                result: result
            }
        };

    }

    /**
     * Get user by identifier
     * @param id User Identifier
     */
    async getUserById(id: string){
        if (!id) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: "id not defined"
                }
            }
        }

        return {
            status: HttpStatus.OK,
            body: {
                message: "User found",
                result: (await this.userService.getUserById(id))
            }
        }
    }

    /**
     * Adds a user's contact
     * @param addContactViewModel Add user contact view model
     */
    async addUserContact(addContactViewModel: AddContactViewModel) {
        if (!addContactViewModel.userId) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'userId not defined',
                    result: addContactViewModel
                }
            }
        }

        if (!addContactViewModel.contactType) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'contactType not defined',
                    result: addContactViewModel
                }
            }
        }

        if (!addContactViewModel.contactValue) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'contactValue not defined',
                    result: addContactViewModel
                }
            }
        }

        const user = await this.userService.getUserById(addContactViewModel.userId);
        const newContact = await this.contactService.createContact(addContactViewModel);
        user.contacts = [...user.contacts, newContact];

        await this.userService.update(user);

        return {
            status: HttpStatus.OK,
            body: {
                message: 'Contact added successfully',
                result: { user: (await this.userService.getUserById(addContactViewModel.userId)) }
            }
        }
    }

    async uploadVideo(fileId: string, uploadDetails: UploadDetailsViewModel) {

        const user = await this.userService.getUserById(uploadDetails.userId);

        if (uploadDetails.section == ResumeSection.INTRODUCTION) {
            const newVideo = await this.introductionService.createIntroduction({
                videoId: fileId,
                posterId: null,
                dateCreated: new Date(Date.now())
            });

            user.introduction = newVideo
        }

        await this.userService.update(user);

        return {
            status: HttpStatus.OK,
            body: {
                message: 'Video uploaded successfully',
                result: (await this.userService.getUserById(user._id))
            }
        }
    }

    async uploadPoster(fileId: string, uploadDetails: UploadDetailsViewModel) {
        const user = await this.userService.getUserById(uploadDetails.userId);

        if (uploadDetails.section == ResumeSection.INTRODUCTION) {
            user.introduction.posterId = fileId;
        }

        await this.userService.update(user);



        return {
            status: HttpStatus.OK,
            body: {
                message: 'Video uploaded successfully',
                result: (await this.userService.getUserById(user._id))
            }
        }
    }

    async addUserLanguage(addLanguageViewModel: AddLanguageViewModel) {
        if (!addLanguageViewModel.userId) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'userId not defined',
                    result: addLanguageViewModel
                }
            };
        }

        if (!addLanguageViewModel.language) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'language not defined',
                    result: addLanguageViewModel
                }
            };
        }

        if (!addLanguageViewModel.level) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'level not defined',
                    result: addLanguageViewModel
                }
            };
        }

        const user = await this.userService.getUserById(addLanguageViewModel.userId);
        const newLanguage = await this.languageService.createLanguage(addLanguageViewModel);

        user.languages.push(newLanguage);

        await this.userService.update(user);

        return {
            status: HttpStatus.OK,
            body: {
                message: 'User language added',
                result: (await this.userService.getUserById(addLanguageViewModel.userId))
            }
        };
    }

    async editValueStatement(editValueStatementViewModel: EditValueStatementViewModel) {
        if (!editValueStatementViewModel.userId) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'userId not defined',
                    result: editValueStatementViewModel
                }
            };
        }

        if (!editValueStatementViewModel.valueStatement) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'valueStatement not defined',
                    result: editValueStatementViewModel
                }
            };
        }

        const user = await this.userService.getUserById(editValueStatementViewModel.userId);
        user.valueStatement = editValueStatementViewModel.valueStatement;
        
        await this.userService.update(user);

        return {
            status: HttpStatus.OK,
            body: {
                message: 'Value statement added',
                result: (await this.userService.getUserById(editValueStatementViewModel.userId))
            }
        };
    }

    async addSkill(addSkillViewModel: AddSkillViewModel) {
        if (!addSkillViewModel.userId) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'userId not defined',
                    result: addSkillViewModel
                }
            };
        }

        if (!addSkillViewModel.skill) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body:{
                    message: 'skill not defined',
                    result: addSkillViewModel
                }
            };
        }

        const user = await this.userService.getUserById(addSkillViewModel.userId);
        const newSkill = await this.skillService.createSkill(addSkillViewModel);
        user.skills.push(newSkill);

        await this.userService.update(user);

        return {
            status: HttpStatus.OK,
            body: {
                message: 'Skill added successfully',
                result: (await this.userService.getUserById(addSkillViewModel.userId))
            }
        }
    }

    async addEducation(addEducationViewModel: AddEducationViewModel) {
        if (!addEducationViewModel.userId) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'userId not defined',
                    result: addEducationViewModel
                }
            };
        }

        if (!addEducationViewModel.school) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'school not defined',
                    result: addEducationViewModel
                }
            };
        }

        if (!addEducationViewModel.degree) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'degree not defined',
                    result: addEducationViewModel
                }
            };
        }
        
        if (!addEducationViewModel.from) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'from not defined',
                    result: addEducationViewModel
                }
            };
        }     
        
        if (!addEducationViewModel.to) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'to not defined',
                    result: addEducationViewModel
                }
            };
        }
        
        const user = await this.userService.getUserById(addEducationViewModel.userId);
        const newEducation = await this.educationService.createEducation(addEducationViewModel);

        user.education.push(newEducation);
        
        await this.userService.update(user);

        return {
            status: HttpStatus.OK,
            body: {
                message: 'Education added successfully',
                result: (await this.userService.getUserById(addEducationViewModel.userId))
            }
        };
    }

    async addExperience(addExperienceViewModel: AddExperienceViewModel) {
        if (!addExperienceViewModel.userId) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'userId not defined',
                    result: addExperienceViewModel
                }
            };
        }

        if (!addExperienceViewModel.companyName) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'companyName not defined',
                    result: addExperienceViewModel
                }
            };
        }

        if (!addExperienceViewModel.title) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'title not defined',
                    result: addExperienceViewModel
                }
            };
        }

        if (!addExperienceViewModel.industry) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'industry not defined',
                    result: addExperienceViewModel
                }
            };
        }        

        if (!addExperienceViewModel.country) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'country not defined',
                    result: addExperienceViewModel
                }
            };
        }

        if (!addExperienceViewModel.from) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'from not defined',
                    result: addExperienceViewModel
                }
            };
        }

        if (!addExperienceViewModel.description) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'description not defined',
                    result: addExperienceViewModel
                }
            };
        }

        const user = await this.userService.getUserById(addExperienceViewModel.userId);
        const newExperience = await this.experienceService.createExperience(addExperienceViewModel);

        user.experience.push(newExperience);

        await this.userService.update(user);

        return {
            status: HttpStatus.OK,
            body: {
                message: 'Experience added successfully',
                result: (await this.userService.getUserById(addExperienceViewModel.userId))
            }
        };
    }

    async addProject(addProjectViewModel: AddProjectViewModel) {
        if (!addProjectViewModel.userId) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'userId not defined',
                    result: addProjectViewModel
                }
            };
        }

        if (!addProjectViewModel.name) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'name not defined',
                    result: addProjectViewModel
                }
            };
        }

        if (!addProjectViewModel.url) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'url not defined',
                    result: addProjectViewModel
                }
            };
        }

        if (!addProjectViewModel.description) {
            return {
                status: HttpStatus.BAD_REQUEST,
                body: {
                    message: 'description not defined',
                    result: addProjectViewModel
                }
            };
        }

        const user = await this.userService.getUserById(addProjectViewModel.userId);
        const newProject = await this.projectService.createProject(addProjectViewModel);

        user.projects.push(newProject);

        await this.userService.update(user);

        return {
            status: HttpStatus.OK,
            body: {
                message: 'Project added successfully',
                result: (await this.userService.getUserById(addProjectViewModel.userId))
            }
        };
    }
}
