import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "@core/core.module";
import {SharedModule} from "@shared/shared.module";
import {HeaderComponent} from "@core/components/header/header.component";
import {TranslationModule} from "./translation.module";
import {FooterComponent} from "@core/components/footer/footer.component";
import {MarkdownModule} from "ngx-markdown";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HouseInviteComponent} from "@features/house-invite/house-invite.component";
import {RECAPTCHA_V3_SITE_KEY, RecaptchaFormsModule, RecaptchaV3Module} from 'ng-recaptcha';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HouseInviteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule.forRoot(),
    TranslationModule.forRoot(),
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    RecaptchaV3Module,
    RecaptchaFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{ provide: RECAPTCHA_V3_SITE_KEY, useValue: "6LeLBAgcAAAAAOPUTclV9ucLO_NRH0AFERMStLYt" }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
