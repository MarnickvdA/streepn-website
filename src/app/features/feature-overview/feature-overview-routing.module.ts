import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeatureOverviewComponent} from "@features/feature-overview/feature-overview.component";

const routes: Routes = [
  {
    path: '',
    component: FeatureOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureOverviewRoutingModule {
}
