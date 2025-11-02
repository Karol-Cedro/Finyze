import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

export interface User {
  id: string;
  email: string;
  nickname: string;
}

export interface RegisterUserDto {
  nickname: string;
  email: string;
  password: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  expiresIn: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8080/api/auth';
  private readonly USER_API_URL = 'http://localhost:8080/api/users';
  private tokenKey = 'jwt_token';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  private currentUserSubject = new BehaviorSubject<string | null>(null);

  constructor(
      private http: HttpClient,
      @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Clear token
    this.removeToken()
  }

  signup(userData: RegisterUserDto): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/signup`, userData);
  }

  login(credentials: LoginUserDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/login`, credentials)
        .pipe(
            tap(response => {
              this.setToken(response.token);
              this.isAuthenticatedSubject.next(true);
              // Fetch user info after successful login
              this.getCurrentUser().subscribe();
            })
        );
  }

  getCurrentUser(): Observable<string> {
    return this.http.get(`${this.USER_API_URL}/me`, { responseType: 'text' })
        .pipe(
            tap(nickname => {
              this.currentUserSubject.next(nickname);
            })
        );
  }

  logout(): void {
    this.removeToken();
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  private setToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  private removeToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.tokenKey);
    }
  }

  private hasToken(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem(this.tokenKey);
    }
    return false;
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  currentUser(): Observable<string | null> {
    return this.currentUserSubject.asObservable();
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }
}
