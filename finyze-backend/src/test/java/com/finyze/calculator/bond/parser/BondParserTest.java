package com.finyze.calculator.bond.parser;

import com.finyze.calculator.bond.model.BondType;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

class BondParserTest {

    @Test
    void parseBondNameTest() {
        //Given
        String bondName = "Obligacje 3-miesięczne OTS";

        //When
        BondType bondType = BondParser.parseBondName(bondName);


        //Then
        assertThat(bondType).isEqualTo(BondType.OTS);
    }

    @Test
    void parseBondInterestRateTest() {
        //Given
        String bondInterestRate = "3,00%";

        //When
        Double parsedInterestRate = BondParser.parseBondInterestRate(bondInterestRate);

        //Then
        assertThat(parsedInterestRate).isEqualTo(3.0);
    }

    @Test
    void parseBondPriceTest() {
        //Given
        String bondPrice = "Cena zakupu 100,00 zł";

        //When
        Double parsedBondPrice = BondParser.parseBondPrice(bondPrice);

        //Then
        assertThat(parsedBondPrice).isEqualTo(100.0);
    }

    @Test
    void parseBondExchangePriceTest() {
        //Given
        String bondExchangePrice = "Cena zamiany 99,90 zł";

        //When
        Double parsedExchangePrice = BondParser.parseBondExchangePrice(bondExchangePrice);

        //Then
        assertThat(parsedExchangePrice).isEqualTo(99.9);
    }
}