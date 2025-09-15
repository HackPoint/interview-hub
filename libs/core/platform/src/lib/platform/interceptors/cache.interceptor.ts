import {
  HttpEvent,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { shareReplay, tap } from 'rxjs';
import { CacheService } from '../services/cache.service';

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method !== 'GET') return next(req);

  const cache = inject(CacheService);

  const cached$ = cache.get<HttpEvent<unknown>>(req.urlWithParams);
  if (cached$) return cached$;

  // upstream$ is already Observable<HttpEvent<unknown>>
  const upstream$ = next(req).pipe(
    shareReplay({ bufferSize: 1, refCount: true })
  );

  return upstream$.pipe(
    tap((evt: HttpEvent<unknown>) => {
      if (evt instanceof HttpResponse) {
        cache.set<HttpEvent<unknown>>(req.urlWithParams, upstream$);
      }
    })
  );
};
