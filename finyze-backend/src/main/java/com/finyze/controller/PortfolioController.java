package com.finyze.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    @PostMapping("/portfolio")
    public ResponseEntity<String> createPortfolio(@RequestParam String portfolioName) {
        return ResponseEntity.ok("Portfolio " + portfolioName + " created");
    }
}
