import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LandingRoutingModule} from './landing-routing.module';
import {LandingPageComponent} from './landing-page.component';
import {SharedModule} from "@shared/shared.module";
import {HeroComponent} from './hero/hero.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    HeroComponent,
    HowItWorksComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
  ]
})
export class LandingModule {
}
