// portfolio.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, PortfolioListItem } from '../../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class Portfolio implements OnInit {
  // Static property to persist across component instances
  private static cachedPortfolios: PortfolioListItem[] | null = null;
  private static hasLoaded = false;

  portfolios: PortfolioListItem[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    // Check if we already have cached data
    if (Portfolio.hasLoaded && Portfolio.cachedPortfolios) {
      this.portfolios = Portfolio.cachedPortfolios;
      this.isLoading = false;
    } else {
      this.loadPortfolios(1);
    }
  }

  loadPortfolios(userId: number): void {
    this.isLoading = true;
    this.error = null;

    this.portfolioService.getPortfolio(userId).subscribe({
      next: (data) => {
        this.portfolios = data;
        // Cache the data for future instances
        Portfolio.cachedPortfolios = data;
        Portfolio.hasLoaded = true;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching portfolios:', err);
        this.error = 'Failed to load portfolios';
        this.isLoading = false;
      }
    });
  }

  createNewPortfolio() {
    // Implement create portfolio functionality
  }

  editPortfolio(id: number) {
    // Implement edit portfolio functionality
  }

  viewPortfolio(id: number) {
    // Implement view portfolio details functionality
  }
}
