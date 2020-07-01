import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectModel } from 'src/user-management/models/project.model';
import { AddProjectViewModel } from 'src/user-management/models/add-project.view-model';

@Injectable()
export class ProjectService {
    constructor(@InjectModel('Project') private projectModel: Model<ProjectModel>) {}

    async createProject(addProjectViewModel: AddProjectViewModel) {
        addProjectViewModel.dateCreated = new Date(Date.now());
        return new this.projectModel(addProjectViewModel);
    }
}
