import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureOverviewRoutingModule } from './feature-overview-routing.module';
import { FeatureOverviewComponent } from './feature-overview.component';
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    FeatureOverviewComponent
  ],
    imports: [
        CommonModule,
        FeatureOverviewRoutingModule,
        SharedModule
    ]
})
export class FeatureOverviewModule { }
