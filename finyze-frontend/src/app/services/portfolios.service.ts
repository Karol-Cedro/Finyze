import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PortfolioListItem {
  portfolioId: number;
  portfolioName: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  getPortfolio(userId: number): Observable<PortfolioListItem[]> {
    return this.http.get<PortfolioListItem[]>(`${this.apiUrl}/${userId}/portfolios`);
  }
}
