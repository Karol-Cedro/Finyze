// portfolios.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfoliosService, PortfolioListItem } from '../../../services/portfolios.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolios.html',
  styleUrls: ['./portfolios.css']
})
export class Portfolios implements OnInit {
  // Static property to persist across component instances
  private static cachedPortfolios: PortfolioListItem[] | null = null;
  private static hasLoaded = false;

  portfolios: PortfolioListItem[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private portfoliosService: PortfoliosService) {}

  ngOnInit(): void {
    // Check if we already have cached data
    if (Portfolios.hasLoaded && Portfolios.cachedPortfolios) {
      this.portfolios = Portfolios.cachedPortfolios;
      this.isLoading = false;
    } else {
      this.loadPortfolios(1);
    }
  }

  loadPortfolios(userId: number): void {
    this.isLoading = true;
    this.error = null;

    this.portfoliosService.getPortfolio(userId).subscribe({
      next: (data) => {
        this.portfolios = data;
        // Cache the data for future instances
        Portfolios.cachedPortfolios = data;
        Portfolios.hasLoaded = true;
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
