import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

import { IndexComponent } from './components/index/index.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';


@NgModule({
  declarations: [IndexComponent, TermsOfServiceComponent, PrivacyPolicyComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
