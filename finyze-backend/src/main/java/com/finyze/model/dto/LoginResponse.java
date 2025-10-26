package com.finyze.model.dto;

public record LoginResponse(String token, long expiresIn) {
}
