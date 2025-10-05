import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IPortfolio {
  id: number;
  name: string;
  // Add other portfolio properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:8080/api/portfolios/test';

  constructor(private http: HttpClient) { }

  getPortfolio(id: number): Observable<IPortfolio> {
    return this.http.get<IPortfolio>(`${this.apiUrl}`);
  }
}
