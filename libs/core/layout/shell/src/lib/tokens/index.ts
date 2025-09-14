import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL');
export const AUTH_URL = new InjectionToken<string>('AUTH_URL');

export interface FeatureFlags {
  cacheHttp: boolean;
  zoneless: boolean;
  showWidgets: boolean;
}
export const FEATURE_FLAGS = new InjectionToken<FeatureFlags>('FEATURE_FLAGS');

export type Logger = (level: 'debug'|'info'|'warn'|'error', message: string, meta?: unknown) => void;
export const LOGGER = new InjectionToken<Logger>('LOGGER');

export const WIDGETS = new InjectionToken<any[]>('WIDGETS');
