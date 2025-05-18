package com.finyze.calculator.bond.parser;

import com.finyze.calculator.bond.model.BondType;

public class BondParser {

    public static BondType parseBondName(String bondName) {
        return BondType.valueOf(bondName.substring(bondName.length() - 3));
    }

    public static Double parseBondInterestRate(String bondInterestRate) {
        return Double.parseDouble(bondInterestRate.substring(0, bondInterestRate.length() - 1).replace(",", "."));
    }

    public static Double parseBondPrice(String bondPrice) {
        return Double.parseDouble(bondPrice.split("Cena zakupu")[1].trim().replace("zł", "").replace(",", "."));
    }

    public static Double parseBondExchangePrice(String bondExchangePrice) {
        String[] splitBondExchangePrice = bondExchangePrice.split("Cena zamiany");
        if (splitBondExchangePrice.length > 1) {
            return Double.parseDouble(splitBondExchangePrice[1].trim().replace("zł", "").replace(",", "."));
        } else return null;
    }


}
