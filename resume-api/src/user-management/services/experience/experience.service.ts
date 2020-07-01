import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExperienceModel } from 'src/user-management/models/experience.model';
import { AddExperienceViewModel } from 'src/user-management/models/add-experience.view-model';

@Injectable()
export class ExperienceService {
    constructor(@InjectModel('Experience') private experienceModel: Model<ExperienceModel>) {}

    async createExperience(addExperienceViewModel: AddExperienceViewModel) {
        addExperienceViewModel.dateCreated = new Date(Date.now());
        return new this.experienceModel(addExperienceViewModel);
    }
}
