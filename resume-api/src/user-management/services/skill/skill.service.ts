import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SkillModel } from 'src/user-management/models/skill.model';
import { AddSkillViewModel } from 'src/user-management/models/add-skill.view-model';

@Injectable()
export class SkillService {
    constructor(@InjectModel('Skill') private skillModel: Model<SkillModel>) {}

    async createSkill(addSkillViewModel: AddSkillViewModel) {
        addSkillViewModel.dateCreated = new Date(Date.now());
        return new this.skillModel(addSkillViewModel);
    }
}
