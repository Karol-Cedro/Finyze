import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

export interface PortfolioListItem {
  portfolioId: number;
  portfolioName: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  getPortfolio(userId: number): Observable<PortfolioListItem[]> {
    return this.http.get<PortfolioListItem[]>(`${this.apiUrl}/${userId}/portfolios`).pipe(
      catchError(error => {
        console.error('Portfolio service error:', error);
        return throwError(() => error);
      })
    );
  }
}
