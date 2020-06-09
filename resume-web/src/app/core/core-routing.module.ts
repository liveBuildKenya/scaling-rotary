import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { LobbyComponent } from '../user-management/components/lobby/lobby.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'terms-of-service', component: TermsOfServiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
