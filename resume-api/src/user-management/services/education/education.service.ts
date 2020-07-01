import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EducationModel } from 'src/user-management/models/education.model';
import { Model } from 'mongoose';
import { AddEducationViewModel } from 'src/user-management/models/add-education.view-model';

@Injectable()
export class EducationService {
    constructor(@InjectModel('Education') private educationModel: Model<EducationModel>) {}

    async createEducation(addEducationViewModel: AddEducationViewModel) {
        addEducationViewModel.dateCreated = new Date(Date.now());
        return new this.educationModel(addEducationViewModel);
    }
}
