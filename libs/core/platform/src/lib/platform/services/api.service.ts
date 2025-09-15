import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@ih/core/layout/shell';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly base = inject(API_URL);

  get<T>(path: string, params?: Record<string,string|number|boolean>) {
    return this.http.get<T>(`${this.base}/${path}`, { params: params as never });
  }
  post<T>(path: string, body: unknown) {
    return this.http.post<T>(`${this.base}/${path}`, body);
  }
}
