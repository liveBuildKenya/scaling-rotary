import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.model';
import { UserService } from './services/user/user.service';
import { UserManagementService } from './services/user-management/user-management.service';
import { UserManagementController } from './controllers/user-management/user-management.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthenticationController } from './controllers/authentication/authentication.controller';
import { JwtStrategy } from './services/authentication/strategies/jwt.strategy';
import { LocalStrategy } from './services/authentication/strategies/local.strategy';
import { ResumeManagementController } from './controllers/resume-management/resume-management.controller';
import { GridFsMulterConfigService } from './services/grid-fs-multer-config/grid-fs-multer-config.service';
import { MulterModule } from '@nestjs/platform-express';
import { FilesService } from './services/file/files.service';
import { ContactService } from './services/contact/contact.service';
import { ContactSchema } from './models/contact.model';
import { LanguageService } from './services/language/language.service';
import { LanguageSchema } from './models/language.model';
import { SkillService } from './services/skill/skill.service';
import { SkillSchema } from './models/skill.model';
import { EducationService } from './services/education/education.service';
import { EducationSchema } from './models/education.model';
import { ExperienceService } from './services/experience/experience.service';
import { ProjectService } from './services/project/project.service';
import { ProjectSchema } from './models/project.model';
import { ExperienceSchema } from './models/experience.model';
import { IntroductionService } from './services/introduction/introduction.service';
import { IntroductionSchema } from './models/introduction.model';

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forFeature([
            { name: 'User', schema: UserSchema },
            { name: 'IntroductionVideo', schema: IntroductionSchema},
            { name: 'Contact', schema: ContactSchema },
            { name: 'Language', schema: LanguageSchema },
            { name: 'Skill', schema: SkillSchema},
            { name: 'Experience', schema: ExperienceSchema },
            { name: 'Education', schema: EducationSchema },
            { name: 'Project', schema: ProjectSchema }
        ]),
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1d' },
        }),
        MulterModule.registerAsync({
            useClass: GridFsMulterConfigService,
            imports: [ConfigModule.forRoot()]
        })
    ],
    providers: [
        UserService,
        UserManagementService,
        AuthenticationService,
        LocalStrategy,
        JwtStrategy,
        GridFsMulterConfigService,
        FilesService,
        ContactService,
        LanguageService,
        SkillService,
        EducationService,
        ExperienceService,
        ProjectService,
        IntroductionService
    ],
    controllers: [
        UserManagementController,
        AuthenticationController,
        ResumeManagementController
    ]
})
export class UserManagementModule {}
