import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { StyleGuideComponent } from './components/style-guide/style-guide.component';

export const components = [
  StyleGuideComponent
];
export const pipes = [];
export const directives = [];

@NgModule({
	declarations: [
		...components,
		...pipes,
		...directives,
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule,
		TranslateModule
	],
	providers: [],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		TranslateModule,
		...components,
		...pipes,
		...directives
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule,
			providers: []
		};
	}
}
