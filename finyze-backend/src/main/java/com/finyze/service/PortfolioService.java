package com.finyze.service;

import com.finyze.model.Portfolio;
import com.finyze.model.Transaction;
import com.finyze.repository.PortfolioRepository;
import com.finyze.repository.TransactionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PortfolioService {
    private final PortfolioRepository portfolioRepository;
    private final TransactionRepository transactionRepository;

    public PortfolioService(PortfolioRepository portfolioRepository,
                            TransactionRepository transactionRepository) {
        this.portfolioRepository = portfolioRepository;
        this.transactionRepository = transactionRepository;
    }

    public List<Portfolio> getAllPortfolios() {
        return portfolioRepository.findAll();
    }

    public Portfolio getPortfolio(Long id) {
        return portfolioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Portfolio not found"));
    }

    public Portfolio savePortfolio(Portfolio portfolio) {
        return portfolioRepository.save(portfolio);
    }

    public List<Transaction> getTransactions(Long portfolioId) {
        return transactionRepository.findByPortfolioId(portfolioId);
    }
}