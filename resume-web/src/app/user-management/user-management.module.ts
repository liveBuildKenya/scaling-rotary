import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LobbyComponent } from './components/lobby/lobby.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';



@NgModule({
  declarations: [LobbyComponent, AuthenticateComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService]
})
export class UserManagementModule { }
