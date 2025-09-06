import { Routes } from '@angular/router';
import { Portfolio } from './pages/portfolio/portfolio';
import { Stocks } from './pages/stocks/stocks';
import { Bonds } from './pages/bonds/bonds';
import { Crypto } from './pages/crypto/crypto';
import { Currencies } from './pages/currencies/currencies';
import { Login } from './pages/login/login';

export const routes: Routes = [
    { path: 'portfolio', component: Portfolio },
    { path: 'stocks', component: Stocks },
    { path: 'bonds', component: Bonds },
    { path: 'crypto', component: Crypto },
    { path: 'currencies', component: Currencies },
    { path: 'login', component: Login },
    { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
];
