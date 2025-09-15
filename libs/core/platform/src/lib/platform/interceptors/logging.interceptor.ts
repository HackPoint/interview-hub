import { HttpInterceptorFn } from '@angular/common/http';
import { LOGGER } from '@ih/core/layout/shell';
import { inject } from '@angular/core';
import { finalize, tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const log = inject(LOGGER);
  const started = performance.now();

  return next(req).pipe(
    tap({
      next: () => { /* ok */ },
      error: (err: unknown) => {
        log('error', `HTTP ${req.method} ${req.url} failed`, err);
      }
    }),
    finalize(() => {
      const ms = (performance.now() - started).toFixed(1);
      log('debug', `HTTP ${req.method} ${req.url} in ${ms}ms`);
    })
  );
};
