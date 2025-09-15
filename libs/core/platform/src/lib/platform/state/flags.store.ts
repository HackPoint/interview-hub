import { inject, Injectable, signal } from '@angular/core';
import { FEATURE_FLAGS, FeatureFlags } from '@ih/core/layout/shell';

@Injectable({ providedIn: 'root' })
export class FlagsStore {
  private flagsInit: FeatureFlags = inject(FEATURE_FLAGS);
  private readonly _flags = signal<FeatureFlags>(this.flagsInit);
  flags = this._flags.asReadonly();

  toggle<K extends keyof FeatureFlags>(key: K) {
    this._flags.update((f) => ({ ...f, [key]: !f[key] }));
  }
  setAll(next: FeatureFlags) {
    this._flags.set(next);
  }
}
