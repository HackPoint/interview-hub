import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { FlagsStore } from '../state/flags.store';

export const featureMatchGuard: CanMatchFn = () => {
  const flags = inject(FlagsStore).flags();
  return flags.showWidgets; // admin is on 
};
