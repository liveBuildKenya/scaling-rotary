import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IntroductionModel } from 'src/user-management/models/introduction.model';
import { Model } from 'mongoose';
import { AddIntroductionVideoViewModel } from 'src/user-management/models/add-intoduction-video-view.model';

@Injectable()
export class IntroductionService {
    constructor(@InjectModel('IntroductionVideo') private introductionModel: Model<IntroductionModel>) {}

    async createIntroduction(addIntroductionVideoViewModel: AddIntroductionVideoViewModel) {
        return new this.introductionModel(addIntroductionVideoViewModel);
    }
}
