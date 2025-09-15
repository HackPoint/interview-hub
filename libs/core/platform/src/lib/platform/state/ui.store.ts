import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiStore {
  private _pending = signal(0);
  private _error = signal<{ url: string; status: number; message: string } | null>(null);

  pending = this._pending.asReadonly();
  error = this._error.asReadonly();

  incPending() { this._pending.update(v => v + 1); }
  decPending() { this._pending.update(v => Math.max(0, v - 1)); }
  setError(e: {url:string; status:number; message:string} | null) { this._error.set(e); }
}
