package com.finyze.controller;

import com.finyze.model.Portfolio;
import com.finyze.model.Transaction;
import com.finyze.service.PortfolioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/portfolios")
@CrossOrigin(origins = "http://localhost:4200")
public class PortfolioController {
    private final PortfolioService portfolioService;

    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping
    public List<Portfolio> getAllPortfolios() {
        return portfolioService.getAllPortfolios();
    }

    @GetMapping("/{id}")
    public Portfolio getPortfolio(@PathVariable Long id) {
        return portfolioService.getPortfolio(id);
    }

    @PostMapping
    public Portfolio createPortfolio(@RequestBody Portfolio portfolio) {
        return portfolioService.savePortfolio(portfolio);
    }

    @GetMapping("/{id}/transactions")
    public List<Transaction> getPortfolioTransactions(@PathVariable Long id) {
        return portfolioService.getTransactions(id);
    }

    @GetMapping("/test")
    public ResponseEntity<String> getPortfolioAssets() {
        String body="{\n" +
                "  \"id\": 1,\n" +
                "  \"name\": \"example value\"\n" +
                "}";
        return ResponseEntity.ok(body);
    }
}

