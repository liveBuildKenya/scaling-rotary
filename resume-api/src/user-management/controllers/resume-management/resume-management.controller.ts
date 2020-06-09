import { Controller, Post, Body, Res, UseInterceptors, UploadedFile, Get, HttpStatus, Param, HttpException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserManagementService } from 'src/user-management/services/user-management/user-management.service';
import { AddUserContactViewModel } from 'src/user-management/models/add-user-contact.view-model';
import { ResultViewModel } from 'src/shared/models/result.view-model';
import { Response } from 'express';
import { UploadDetailsViewModel } from 'src/user-management/models/upload-details.view-model';
import { FilesService } from 'src/user-management/services/file/files.service';
import { AddUserLanguageViewModel } from 'src/user-management/models/add-user-langauge.view-model';
import { EditValueStatementViewModel } from 'src/user-management/models/edit-value-statement.view-model';
import { AddSkillViewModel } from 'src/user-management/models/add-skill.view-model';
import { AddEducationViewModel } from 'src/user-management/models/add-education.view-model';
import { AddExperienceViewModel } from 'src/user-management/models/add-experience.view-model';
import { AddProjectViewModel } from 'src/user-management/models/add-project.view-model';

@Controller('resume')
export class ResumeManagementController {
    constructor(private userManagementService: UserManagementService,
                private filesService: FilesService) {}

    @Post('contact/add')
    async addUserContact(@Body() addUserContactViewModel: AddUserContactViewModel, @Res() res: Response) {
        const result: ResultViewModel = await this.userManagementService.addUserContact(addUserContactViewModel);
        res.status(result.status).json(result.body);
    }

    @Post('language/add')
    async addUserLanguage(@Body() addUserLanguageViewModel: AddUserLanguageViewModel, @Res() res: Response) {
        const result: ResultViewModel = await this.userManagementService.addUserLanguage(addUserLanguageViewModel);
        res.status(result.status).json(result.body);
    }

    @Post('value-statement/edit')
    async editValueStatement(@Body() editValueStatementViewModel: EditValueStatementViewModel, @Res() res: Response) {
        const result: ResultViewModel = await this.userManagementService.editValueStatement(editValueStatementViewModel);
        res.status(result.status).json(result.body);
    }

    @Post('skill/add')
    async addSkill(@Body() addSkillViewModel: AddSkillViewModel, @Res() res: Response) {
        const result: ResultViewModel = await this.userManagementService.addSkill(addSkillViewModel);
        res.status(result.status).json(result.body);
    }

    @Post('education/add')
    async addEducation(@Body() addEducationViewModel: AddEducationViewModel, @Res() res: Response) {
        const result: ResultViewModel = await this.userManagementService.addEducation(addEducationViewModel);
        res.status(result.status).json(result.body);
    }

    @Post('experience/add')
    async addExperience(@Body() addExperienceViewModel: AddExperienceViewModel, @Res() res: Response) {
        const result: ResultViewModel = await this.userManagementService.addExperience(addExperienceViewModel);
        res.status(result.status).json(result.body);
    }

    @Post('project/add')
    async addProject(@Body() addProjectViewModel: AddProjectViewModel, @Res() res: Response) {
        const result: ResultViewModel = await this.userManagementService.addProject(addProjectViewModel);
        res.status(result.status).json(result.body);
    }    

    @Post('video/upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadVideo(@UploadedFile() file, @Body() uploadDetails: UploadDetailsViewModel, @Res() res: Response) {
        const result: ResultViewModel = await this.userManagementService.uploadVideo(file.id, uploadDetails);
        res.status(result.status).json(result.body);
    }

    @Post('poster/upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadPoster(@UploadedFile() file, @Body() uploadDetails: UploadDetailsViewModel, @Res() res: Response) {
        const result: ResultViewModel = await this.userManagementService.uploadPoster(file.id, uploadDetails);
        res.status(result.status).json(result.body);
    }

    @Get('video/:id')
    async getVideoById(@Param('id') id: string, @Res() res: Response) {
        const file = await this.filesService.findInfo(id)
        const filestream = await this.filesService.readStream(id)
        if(!filestream){
            throw new HttpException('An error occurred while retrieving file', HttpStatus.EXPECTATION_FAILED)
        }
        res.header('Content-Type', file.contentType);
        return filestream.pipe(res)
    }

    @Get('file/:id')
    async getFileById(@Param('id') id: string, @Res() res: Response) {
        const file = await this.filesService.findInfo(id)
        const filestream = await this.filesService.readStream(id)
        if(!filestream){
            throw new HttpException('An error occurred while retrieving file', HttpStatus.EXPECTATION_FAILED)
        }
        res.header('Content-Type', file.contentType);
        return filestream.pipe(res)
    }
}
