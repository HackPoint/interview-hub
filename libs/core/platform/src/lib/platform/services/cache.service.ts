import { Injectable } from '@angular/core';
import { Observable, shareReplay, timer } from 'rxjs';

interface Entry<T> { ts: number; val: Observable<T>; }

@Injectable({ providedIn: 'root' })
export class CacheService {
  private readonly map = new Map<string, Entry<unknown>>();
  private readonly ttlMs = 60_000;

  get<T>(key: string): Observable<T> | null {
    const raw = this.map.get(key);
    if (!raw) return null;
    if (Date.now() - raw.ts > this.ttlMs) { this.map.delete(key); return null; }
    return raw.val as Observable<T>;
  }

  set<T>(key: string, obs: Observable<T>): void {
    // Ensure one replayed value for all subscribers
    const shared = obs.pipe(shareReplay({ bufferSize: 1, refCount: true }));
    this.map.set(key, { ts: Date.now(), val: shared });
    void timer(this.ttlMs).subscribe(() => this.map.delete(key));
  }
}
