import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { UnauthorizedException, Injectable } from "@nestjs/common";
import { AuthenticationService } from "src/user-management/services/authentication/authentication.service";

/**
 * Represents the local passport strategy
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    
    constructor(private authenticationService: AuthenticationService) {
        super();
    }

    /**
     * Validates a user
     * @param userViewModel user view model
     */
    async validate(username: string, password: string) {
        const userViewModel: any = { email: username, password: password};
        const user = await this.authenticationService.validateUser(userViewModel);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}