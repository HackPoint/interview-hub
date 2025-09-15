import { Injectable, signal, computed, inject } from '@angular/core';
import { BROWSER_STORAGE } from '@ih/core/layout/shell';

export interface AuthUser { email: string; }

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private readonly storage = inject(BROWSER_STORAGE);

  private readonly _token = signal<string | null>(null);
  private readonly _user  = signal<AuthUser | null>(null);

  readonly token = this._token.asReadonly();
  readonly user  = this._user.asReadonly();
  readonly isLoggedIn = computed(() => !!this._token());

  constructor() {
    const saved = this.storage?.getItem('ih_token') ?? null;
    const email = this.storage?.getItem('ih_email') ?? null;

    if (saved && email) {
      this._token.set(saved);
      this._user.set({ email });
    }
  }

  login(token: string, email: string, remember: boolean): void {
    this._token.set(token);
    this._user.set({ email }); if (remember && this.storage) {
      this.storage.setItem('ih_token', token);
      this.storage.setItem('ih_email', email);
    }

  }

  logout(): void {
    this._token.set(null);
    this._user.set(null);
    if (this.storage) {
      this.storage.removeItem('ih_token');
      this.storage.removeItem('ih_email');
    }
  }
}
