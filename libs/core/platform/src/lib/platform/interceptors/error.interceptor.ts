import { catchError, finalize, throwError } from 'rxjs';
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { UiStore } from '../state';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const ui = inject(UiStore);
  ui.incPending();

  return next(req).pipe(
    catchError((e: unknown) => {
      const err = e as HttpErrorResponse;
      ui.setError({ url: req.url, status: err.status ?? 0, message: err.message });
      return throwError(() => err);
    }),
    finalize(() => ui.decPending())
  );
};
