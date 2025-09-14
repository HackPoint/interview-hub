import {
  ApplicationConfig,
  isDevMode,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withPreloading(PreloadAllModules)),
    // { provide: API_URL, useValue: 'https://jsonplaceholder.typicode.com' },
    // { provide: AUTH_URL, useValue: 'https://reqres.in/api' },
    // { provide: FEATURE_FLAGS, useValue: { cacheHttp: true, zoneless: false, showWidgets: true } },
    // { provide: LOGGER, useValue: consoleLogger(isDevMode()) }
  ],
};
