import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Locale } from 'date-fns';
import {enGB, nl} from "date-fns/locale";

export const createTranslateLoader = (http: HttpClient) => new TranslateHttpLoader(http, 'assets/i18n/', '.json');

export enum SupportedLocale {
	dutch = 'nl',
	english = 'en',
}

export class TranslationModule {
	static forRoot(): ModuleWithProviders<TranslateModule> {
		return TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [HttpClient]
			}
		});
	}
}

export class TranslationHelper {
	static isSupportedLocale(locale: string): boolean {
    return Object
			.keys(SupportedLocale)
			.map(k => SupportedLocale[k as keyof typeof SupportedLocale] as string)
			.includes(locale);
	}

	static getDateFnsLocale(localeString: string): Locale {
		switch (localeString) {
			case SupportedLocale.dutch:
				return nl;
			default:
				return enGB;
		}
	}
}
