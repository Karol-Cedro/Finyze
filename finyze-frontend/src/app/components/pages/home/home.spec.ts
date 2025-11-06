import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        // Use provideRouter with an empty routes array
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the hero title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1.hero-title')?.textContent).toContain('Track Smarter. Invest Better.');
  });

  it('should have a link to portfolios', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const portfolioLink = compiled.querySelector('button[routerLink="/portfolios"]');
    expect(portfolioLink).toBeTruthy();
    expect(portfolioLink?.textContent).toContain('Get Started');
  });

  it('should have a link to login', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const loginLink = compiled.querySelector('button[routerLink="/login"]');
    expect(loginLink).toBeTruthy();
    expect(loginLink?.textContent).toContain('Sign In');
  });
});
