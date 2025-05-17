package com.finyze.calculator.bond.model;

public enum BondType {
    OTS(3),   // 3-miesięczne
    ROR(12),   // roczne
    DOR(24),   // 2-letnie
    TOS(36),   // 3-letnie
    COI(48),   // 4-letnie
    EDO(120),   // 10-letnie
    ROS(72),   // 6-letnie
    ROD(144);    // 12-letnie

    private final int durationMonths;

    BondType(int durationMonths) {
        this.durationMonths = durationMonths;
    }

    public int getDurationMonths() {
        return durationMonths;
    }
}
