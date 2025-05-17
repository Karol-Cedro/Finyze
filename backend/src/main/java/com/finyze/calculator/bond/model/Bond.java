package com.finyze.calculator.bond.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Bond {
    private BondType type;
    private Double interestRate;
    private Double price;
    private Double exchangePrice;
    private String series;
    private String label;
}
