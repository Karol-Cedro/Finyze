
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit, OnDestroy {
  title = 'finyze-frontend';
  isAuthenticated = false;
  showNavbar = true; // Always show navbar for now
  private authSubscription?: Subscription;
  private routerSubscription?: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Only initialize authentication state in browser
    if (isPlatformBrowser(this.platformId)) {
      this.initializeAuth();
    }
  }

  private initializeAuth(): void {
    // Subscribe to authentication status
    this.authSubscription = this.authService.isAuthenticated().subscribe(
      isAuth => {
        this.isAuthenticated = isAuth;
      }
    );

    // Subscribe to route changes
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // You can add logic here to hide/show navbar on specific pages
      });

    // Initial check
    this.isAuthenticated = this.authService.isLoggedIn();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
