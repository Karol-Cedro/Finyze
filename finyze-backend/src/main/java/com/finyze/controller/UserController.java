package com.finyze.controller;

import com.finyze.dto.UserPortfoliosDto;
import com.finyze.model.User;
import com.finyze.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/{id}/portfolios")
    public ResponseEntity<List<UserPortfoliosDto>> getUserPortfolios(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserPortfolios(id));
    }
}

