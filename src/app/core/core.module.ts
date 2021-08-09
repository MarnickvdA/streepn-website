import {NgModule, Optional, SkipSelf} from '@angular/core';
import {EnsureImportedOnceModule} from "./ensure-imported-once.module";

export const services = [];
export const interceptors = [];
export const components = [];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...components
  ],
  exports: [
    ...components
  ],
  providers: [
    ...services,
    ...interceptors
  ],
})
export class CoreModule extends EnsureImportedOnceModule {
  public constructor(@SkipSelf() @Optional() parent: CoreModule) {
    super(parent);
  }
}
