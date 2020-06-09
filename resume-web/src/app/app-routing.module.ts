import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'user', loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule) },
  { path: 'resume', loadChildren: () => import('./resume-management/resume-management.module').then(m => m.ResumeManagementModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
