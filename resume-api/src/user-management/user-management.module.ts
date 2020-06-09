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

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forFeature([
            { name: 'User', schema: UserSchema }
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
    providers: [UserService, UserManagementService, AuthenticationService, LocalStrategy, JwtStrategy, GridFsMulterConfigService, FilesService],
    controllers: [UserManagementController, AuthenticationController, ResumeManagementController]
})
export class UserManagementModule {}
