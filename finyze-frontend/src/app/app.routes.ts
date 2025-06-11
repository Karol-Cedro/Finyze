import { Routes } from '@angular/router';
import { Portfolio } from './components/pages/portfolio/portfolio';
import { Stocks } from './components/pages/stocks/stocks';
import { Bonds } from './components/pages/bonds/bonds';
import { Crypto } from './components/pages/crypto/crypto';
import { Currencies } from './components/pages/currencies/currencies';
import { Login } from './components/pages/login/login';

export const routes: Routes = [
  { path: 'portfolio', component: Portfolio },
  { path: 'stocks', component: Stocks },
  { path: 'bonds', component: Bonds },
  { path: 'crypto', component: Crypto },
  { path: 'currencies', component: Currencies },
  { path: 'login', component: Login },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
];
