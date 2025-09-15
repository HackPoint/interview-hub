import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

export interface LoginResponse {
  token: string;
}
export interface LoginPayload {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);

  login(body: LoginPayload) {
    return this.http
      .post<LoginResponse>('https://reqres.in/api/login', body)
      .pipe(
        map((res) => ({ token: res.token })),
        catchError((e: unknown) => {
          const err = e as HttpErrorResponse;
          const message =
            err.error && typeof err.error === 'object' && 'error' in err.error
              ? String(
                  (err.error as { error?: unknown }).error ?? 'Login error'
                )
              : err.message;
          return throwError(() => new Error(message));
        })
      );
  }
}
