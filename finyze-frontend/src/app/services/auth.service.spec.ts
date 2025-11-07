import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto, LoginResponse, User } from '../model';
import { PLATFORM_ID } from '@angular/core';
describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  const mockPlatformId = 'browser';
  const mockToken = 'mock-jwt-token';
  const mockUser: User = { id: '1', email: 'test@example.com', nickname: 'testuser' };
  const apiUrl = 'http://localhost:8080/api/auth';
  const userApiUrl = 'http://localhost:8080/api/users';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        AuthService,
        { provide: PLATFORM_ID, useValue: mockPlatformId }
      ]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);

    // Clear localStorage before each test
    localStorage.clear();
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    const loginData: LoginUserDto = {
      email: 'test@example.com',
      password: 'password123'
    };

    const mockResponse: LoginResponse = {
      token: mockToken,
      expiresIn: 3600
    };

    it('should make a POST request to login endpoint and store token', () => {
      service.login(loginData).subscribe(response => {
        expect(response).toEqual(mockResponse);
        expect(service['getToken']()).toBe(mockToken);
      });

      const req = httpMock.expectOne(`${apiUrl}/login`);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);

      // Verify user info is fetched after login
      const userReq = httpMock.expectOne(`${userApiUrl}/me`);
      userReq.flush('testuser');
    });
  });

  // ... rest of your test cases remain the same
  describe('signup', () => {
    const signupData: RegisterUserDto = {
      nickname: 'testuser',
      email: 'test@example.com',
      password: 'password123'
    };

    it('should make a POST request to signup endpoint', () => {
      service.signup(signupData).subscribe(user => {
        expect(user).toEqual(mockUser);
      });

      const req = httpMock.expectOne(`${apiUrl}/signup`);
      expect(req.request.method).toBe('POST');
      req.flush(mockUser);
    });
  });

  describe('logout', () => {
    it('should remove token and update auth state', () => {
      // First login
      localStorage.setItem('jwt_token', mockToken);

      service.logout();

      expect(service['getToken']()).toBeNull();
      service.isAuthenticated().subscribe(isAuth => {
        expect(isAuth).toBeFalse();
      });
    });
  });

  describe('isLoggedIn', () => {
    it('should return true when token exists', () => {
      localStorage.setItem('jwt_token', mockToken);
      expect(service.isLoggedIn()).toBeTrue();
    });

    it('should return false when token does not exist', () => {
      expect(service.isLoggedIn()).toBeFalse();
    });
  });

  describe('getCurrentUser', () => {
    it('should fetch and return current user', () => {
      service.getCurrentUser().subscribe(nickname => {
        expect(nickname).toBe('testuser');
      });

      const req = httpMock.expectOne(`${userApiUrl}/me`);
      expect(req.request.method).toBe('GET');
      req.flush('testuser');
    });
  });
});
