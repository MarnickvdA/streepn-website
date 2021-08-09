import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TermsComponent} from "@features/legal/terms/terms.component";
import {PrivacyComponent} from "@features/legal/privacy/privacy.component";

const routes: Routes = [
  {
    path: 'legal',
    component: TermsComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalRoutingModule { }
