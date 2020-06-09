import { Injectable, HttpStatus } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserViewModel } from 'src/user-management/models/user.view-model';
import * as bcrypt from 'bcrypt';

/**
 * Represents the authentication service
 */
@Injectable()
export class AuthenticationService {
    constructor(private userService: UserService,
                private jwtService: JwtService){}

    /**
     * Logs in a user
     * @param user The user authenticated by the local strategy
     */
    async login(user: any) {
        return {
            status: HttpStatus.OK,
            body: {
                message: 'Login successful',
                result: { 
                    token: (await this.jwtService.sign({ email: user.email })),
                    user: (await this.userService.getUserByEmail(user.email))
                }
            }
        }
    }

    async validateUser(userViewModel: UserViewModel) {
        const user = await this.userService.getUserByEmail(userViewModel.email);
        if (user && bcrypt.compareSync(userViewModel.password, user.password)) {
            const { password, ...result } = user;
            return result;
        } else {
            return null;
        }
    }
}
