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
  portfolios: PortfolioListItem[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadPortfolios(1); // Assuming user ID 1 for now
  }

  loadPortfolios(userId: number): void {
    this.isLoading = true;
    this.error = null;

    this.portfolioService.getPortfolio(userId).subscribe({
      next: (data) => {
        this.portfolios = data;
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
