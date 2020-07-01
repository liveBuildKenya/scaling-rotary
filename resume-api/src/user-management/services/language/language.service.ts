import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LanguageModel } from 'src/user-management/models/language.model';
import { AddLanguageViewModel } from 'src/user-management/models/add-langauge-view.model';

@Injectable()
export class LanguageService {
    constructor(@InjectModel('Language') private languageModel: Model<LanguageModel>) {}

    async createLanguage(addLanguageViewModel: AddLanguageViewModel) {
        addLanguageViewModel.dateCreated = new Date(Date.now());
        return new this.languageModel(addLanguageViewModel);
    }
}
