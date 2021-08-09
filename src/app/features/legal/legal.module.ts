import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LegalRoutingModule} from './legal-routing.module';
import {TermsComponent} from './terms/terms.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {MarkdownModule} from "ngx-markdown";


@NgModule({
  declarations: [
    TermsComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    LegalRoutingModule,
    MarkdownModule
  ]
})
export class LegalModule {
}
