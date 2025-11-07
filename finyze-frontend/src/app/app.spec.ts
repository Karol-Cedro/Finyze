import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { App } from './app';
import { of } from 'rxjs';

describe('App', () => {

  beforeEach(async () => {
    // Create a spy for AuthService
    const spy = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
    spy.isAuthenticated.and.returnValue(of(false));

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([]),  // Required by Router dependency
        provideHttpClient(withInterceptorsFromDi()),  // Required by AuthService
        provideHttpClientTesting(),  // For HTTP testing
        provideZonelessChangeDetection()
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
