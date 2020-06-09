import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserModel } from 'src/user-management/models/user.model';
import { UserViewModel } from 'src/user-management/models/user.view-model';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<UserModel>) {}

        /**
     * Creates a user
     * @param userViewModel User view model
     */
    async create(userViewModel: UserViewModel) {
        userViewModel.dateCreated = new Date();
        const newUser = new this.userModel(userViewModel);
        return await newUser.save();
    }

    async update(user: any) {
        await this.userModel.updateOne({_id: user._id}, user);
        return await this.getUserByEmail(user.email);
    }

    /**
     * Gets a user by email
     * @param username email
     */
    async getUserByEmail(email: string) {
        let user: any = await this.userModel.find({ email: email });
        user = user.map((value) => {
            return {
                _id: value._id,
                name: value.name,
                email: value.email,
                password: value.password,
                dateCreated: value.dateCreated,
                dateUpdated: value.dateUpdated
            }
        });
        return user[0];
    }

    async getUserById(id: string) {
        const user: any = await this.userModel.findById(id);
        return {
            _id: user._id,
            name: user.name,
            contacts: user.contacts,
            introduction: user.introduction,
            experience: user.experience,
            skills: user.skills,
            education: user.education,
            projects: user.projects,
            dateCreated: user.dateCreated,
            dateUpdated: user.dateUpdated
        };
    }
}
