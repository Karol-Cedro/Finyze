import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  getPortfolio(id: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/${id}/portfolios`);
  }
}
