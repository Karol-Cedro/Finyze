package com.finyze.controller;

import com.finyze.model.dto.UserPortfolioDto;
import com.finyze.model.User;
import com.finyze.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/me")
    public ResponseEntity<String> authenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        User currentUser = (User) authentication.getPrincipal();

        return ResponseEntity.ok(currentUser.getNickname());
    }

    @GetMapping("/")
    public ResponseEntity<List<User>> allUsers() {
        List <User> users = userService.getAllUsers();

        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}/portfolios")
    public ResponseEntity<List<UserPortfolioDto>> getUserPortfolios(@PathVariable Long id) {
        List<UserPortfolioDto> userPortfoliosList = userService.getUserPortfolios(id);
        return ResponseEntity.ok(userPortfoliosList);
    }
}

