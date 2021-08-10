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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
