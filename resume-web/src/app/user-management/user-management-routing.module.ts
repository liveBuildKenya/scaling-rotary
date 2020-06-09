import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';


const routes: Routes = [
  { path: 'register', component: LobbyComponent },
  { path: 'login', component: AuthenticateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
