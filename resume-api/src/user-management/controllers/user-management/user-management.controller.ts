import { Controller, Post, Body, Res, Get, UseGuards, Param } from '@nestjs/common';
import { Response } from 'express';
import { UserManagementService } from 'src/user-management/services/user-management/user-management.service';
import { UserViewModel } from 'src/user-management/models/user.view-model';
import { ResultViewModel } from 'src/shared/models/result.view-model';
import { JwtAuthenticationGuard } from 'src/user-management/services/authentication/guards/jwt-authentication.guard';

@Controller('user')
export class UserManagementController {

    constructor(private userManagementService: UserManagementService) {}
    
    /**
     * Registers a user
     * @param userViewModel User view model
     * @param res Response model
     */
    @Post('register')
    async register(@Body() userViewModel: UserViewModel, @Res() res: Response) {
        
        if (userViewModel.email && userViewModel.password) {
            const result: ResultViewModel = await this.userManagementService.register(userViewModel);
            res.status(result.status).json(result.body);
        }
    }

    // @UseGuards(JwtAuthenticationGuard)
    @Get(':id')
    async getUserById(@Param('id') id: string, @Res() res: Response) {
        const result: ResultViewModel = await this.userManagementService.getUserById(id);
        res.status(result.status).json(result.body);
    }
}
