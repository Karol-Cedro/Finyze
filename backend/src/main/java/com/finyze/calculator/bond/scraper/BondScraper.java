package com.finyze.calculator.bond.scraper;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

public class BondScraper {
    public static void main(String[] args) throws IOException {
        String url = "https://www.obligacjeskarbowe.pl/oferta/";

        Document doc = Jsoup.connect(url).get();

        Element bondTable = doc.getElementsByClass("comparison-table__list").getFirst();
        Elements bondList = bondTable.getElementsByClass("comparison-table__col");

        for (Element bond : bondList) {

            String bondName = bond.getElementsByClass("product-box__type").text();
            String bondInterestRate = bond.getElementsByClass("product-box__value").text();
            String bondLabel = bond.getElementsByClass("product-box__label").text();
            String bondSeries = bond.getElementsByClass("product-box__series").text();

            Elements bondRowsContent = bond.getElementsByClass("tt-trigger");
            String bondBuyPrice = bondRowsContent.get(0).text();
            String bondInterests = bondRowsContent.get(2).text();
            String bondExchangePrice = bondRowsContent.get(4).text();

            System.out.println("");
        }
    }
}

