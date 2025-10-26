package com.finyze.service;

import com.finyze.model.dto.UserPortfolioDto;
import com.finyze.model.User;
import com.finyze.repository.PortfolioRepository;
import com.finyze.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PortfolioRepository portfolioRepository;

    public UserService(UserRepository userRepository, PortfolioRepository portfolioRepository) {
        this.userRepository = userRepository;
        this.portfolioRepository = portfolioRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<UserPortfolioDto> getUserPortfolios(Long userId) {
        return portfolioRepository.findByUserId(userId).stream()
                .map(portfolio -> new UserPortfolioDto(portfolio.getId(), portfolio.getName()))
                .toList();
    }
}
