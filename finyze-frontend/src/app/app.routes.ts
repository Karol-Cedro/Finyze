import {Routes} from '@angular/router';
import {Home} from './components/pages/home/home';
import {Portfolios} from './components/pages/portfolios/portfolios';
import {Stocks} from './components/pages/stocks/stocks';
import {Bonds} from './components/pages/bonds/bonds';
import {Crypto} from './components/pages/crypto/crypto';
import {Currencies} from './components/pages/currencies/currencies';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {AuthGuard} from './guards/auth-guard';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'portfolios', component: Portfolios, canActivate: [AuthGuard] },
  { path: 'stocks', component: Stocks },
  { path: 'bonds', component: Bonds },
  { path: 'crypto', component: Crypto },
  { path: 'currencies', component: Currencies },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '/home' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
