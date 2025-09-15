import { HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

export const retryInterceptor: HttpInterceptorFn = (
  req,
  next
): Observable<HttpEvent<unknown>> => {
  const isIdempotent = req.method === 'GET';
  if (!isIdempotent) return next(req);

  return next(req).pipe(
    retry({
      count: 2,
      delay: 250,
    })
  );
};
