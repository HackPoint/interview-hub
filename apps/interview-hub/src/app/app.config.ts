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
import {
  API_URL,
  AUTH_URL,
  FEATURE_FLAGS,
  LOGGER,
} from '@ih/core/layout/shell';
import {
  authInterceptor,
  cacheInterceptor,
  consoleLogger,
  errorInterceptor,
  loggingInterceptor,
  retryInterceptor,
} from '@ih/core/platform';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withPreloading(PreloadAllModules)),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        loggingInterceptor,
        authInterceptor,
        retryInterceptor,
        cacheInterceptor,
        errorInterceptor
      ])
    ),
    { provide: API_URL, useValue: 'https://jsonplaceholder.typicode.com' },
    { provide: AUTH_URL, useValue: 'https://reqres.in/api' },
    { provide: FEATURE_FLAGS, useValue: { cacheHttp: true, zoneless: false, showWidgets: true } },
    { provide: LOGGER, useValue: consoleLogger(isDevMode()) }
  ],
};
