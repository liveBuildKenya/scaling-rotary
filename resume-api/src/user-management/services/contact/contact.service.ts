import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ContactModel } from 'src/user-management/models/contact.model';
import { InjectModel } from '@nestjs/mongoose';
import { AddContactViewModel } from 'src/user-management/models/add-contact-view.model';

@Injectable()
export class ContactService {
    constructor(@InjectModel('Contact') private contactModel: Model<ContactModel>) {}

    async createContact(addContactViewModel: AddContactViewModel) {
        addContactViewModel.dateCreated = new Date(Date.now());
        return new this.contactModel(addContactViewModel);
    }
}
