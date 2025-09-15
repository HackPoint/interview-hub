import { inject, InjectionToken, PLATFORM_ID, Type } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const API_URL = new InjectionToken<string>('API_URL');
export const AUTH_URL = new InjectionToken<string>('AUTH_URL');

export interface FeatureFlags {
  cacheHttp: boolean;
  zoneless: boolean;
  showWidgets: boolean;
}
export const FEATURE_FLAGS = new InjectionToken<FeatureFlags>('FEATURE_FLAGS');

export type Logger = (
  level: 'debug' | 'info' | 'warn' | 'error',
  message: string,
  meta?: unknown
) => void;
export const LOGGER = new InjectionToken<Logger>('LOGGER');
export const WIDGETS = new InjectionToken<readonly Type<unknown>[]>('WIDGETS');

export const BROWSER_STORAGE = new InjectionToken<Storage | null>('BROWSER_STORAGE', {
  providedIn: 'root',
  factory: () => {
    const platformId = inject(PLATFORM_ID);

    if(!isPlatformBrowser(platformId)) return null;
    try {
      return globalThis.localStorage;
    } catch {
      return null;
    }
  }
})
