import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';
import { LoginUserDto } from '../../model';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const authSpy = jasmine.createSpyObj('AuthService', ['login']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authSpy },
        { provide: Router, useValue: routerSpyObj }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty fields', () => {
    expect(component.loginForm.get('email')?.value).toBe('');
    expect(component.loginForm.get('password')?.value).toBe('');
  });

  it('should mark form as invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should validate email field', () => {
    const email = component.loginForm.get('email');
    email?.setValue('invalid-email');
    expect(email?.valid).toBeFalsy();
    expect(email?.hasError('email')).toBeTruthy();

    email?.setValue('valid@example.com');
    expect(email?.valid).toBeTruthy();
  });

  it('should validate password field', () => {
    const password = component.loginForm.get('password');
    password?.setValue('123');
    expect(password?.valid).toBeFalsy();
    expect(password?.hasError('minlength')).toBeTruthy();

    password?.setValue('validpassword');
    expect(password?.valid).toBeTruthy();
  });

  it('should call authService.login on valid form submission', fakeAsync(() => {
    const mockResponse = { token: 'mock-token', expiresIn: 3600 };
    authServiceSpy.login.and.returnValue(of(mockResponse));

    component.loginForm.setValue({
      email: 'test@example.com',
      password: 'password123'
    });

    component.onSubmit();
    tick();

    expect(authServiceSpy.login).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123'
    } as LoginUserDto);
  }));

  it('should handle login error', fakeAsync(() => {
    const errorResponse = { error: { message: 'Invalid credentials' } };
    authServiceSpy.login.and.returnValue(throwError(() => errorResponse));

    component.loginForm.setValue({
      email: 'test@example.com',
      password: 'wrongpassword'
    });

    component.onSubmit();
    tick();

    expect(component.isLoading).toBeFalse();
    expect(component.errorMessage).toBe('Invalid credentials');
  }));

  it('should navigate to signup page', () => {
    component.goToSignup();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/signup']);
  });

  it('should disable submit button when form is invalid', () => {
    component.loginForm.setValue({
      email: '',
      password: ''
    });
    fixture.detectChanges();

    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton.disabled).toBeTrue();
  });
});
