import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureOverviewRoutingModule } from './feature-overview-routing.module';
import { FeatureOverviewComponent } from './feature-overview.component';


@NgModule({
  declarations: [
    FeatureOverviewComponent
  ],
  imports: [
    CommonModule,
    FeatureOverviewRoutingModule
  ]
})
export class FeatureOverviewModule { }
