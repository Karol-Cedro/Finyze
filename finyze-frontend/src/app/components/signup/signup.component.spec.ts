import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { SignupComponent } from './signup.component';
import { AuthService } from '../../services/auth.service';
import { RegisterUserDto } from '../../model';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const authSpy = jasmine.createSpyObj('AuthService', ['signup']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authSpy },
        { provide: Router, useValue: routerSpyObj }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty fields', () => {
    expect(component.signupForm.get('nickname')?.value).toBe('');
    expect(component.signupForm.get('email')?.value).toBe('');
    expect(component.signupForm.get('password')?.value).toBe('');
    expect(component.signupForm.get('confirmPassword')?.value).toBe('');
  });

  it('should validate required fields', () => {
    const form = component.signupForm;
    expect(form.valid).toBeFalsy();

    form.setValue({
      nickname: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      confirmPassword: 'password123'
    });
    expect(form.valid).toBeTruthy();
  });

  it('should validate password match', () => {
    const form = component.signupForm;
    form.setValue({
      nickname: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      confirmPassword: 'different'
    });
    expect(form.valid).toBeFalsy();
  });

  it('should call authService.signup on valid form submission', fakeAsync(() => {
    const mockUser = { id: '1', email: 'test@example.com', nickname: 'testuser' };
    authServiceSpy.signup.and.returnValue(of(mockUser));

    component.signupForm.setValue({
      nickname: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      confirmPassword: 'password123'
    });

    component.onSubmit();
    tick();

    expect(authServiceSpy.signup).toHaveBeenCalledWith({
      nickname: 'testuser',
      email: 'test@example.com',
      password: 'password123'
    } as RegisterUserDto);
  }));

  it('should handle signup error', fakeAsync(() => {
    const errorResponse = { error: { message: 'Email already exists' } };
    authServiceSpy.signup.and.returnValue(throwError(() => errorResponse));

    component.signupForm.setValue({
      nickname: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      confirmPassword: 'password123'
    });

    component.onSubmit();
    tick();

    expect(component.isLoading).toBeFalse();
    expect(component.errorMessage).toBe('Email already exists');
  }));

  it('should navigate to login page', () => {
    component.goToLogin();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });
});
