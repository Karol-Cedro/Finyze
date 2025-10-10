import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class Portfolio implements OnInit {
  portfolioData: string[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadPortfolio(1); // Fetch portfolio with ID 1
  }

  loadPortfolio(id: number): void {
    this.isLoading = true;
    this.error = null;

    this.portfolioService.getPortfolio(id).subscribe({
      next: (data) => {
        this.portfolioData = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching portfolios:', err);
        this.error = 'Failed to load portfolios data';
        this.isLoading = false;
      }
    });
  }
}
