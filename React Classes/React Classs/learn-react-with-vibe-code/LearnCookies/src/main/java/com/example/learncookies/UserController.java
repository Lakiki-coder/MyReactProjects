package com.example.learncookies;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/profile")
    public ResponseEntity<?> profile(
            @CookieValue(name = "token", required = false) String token) {

        if (token == null) {
            return ResponseEntity.status(401).body("No token");
        }

        try {
            String email = jwtUtil.validateToken(token);
            return ResponseEntity.ok("Welcome " + email);
        } catch (Exception e) {
            return ResponseEntity.status(403).body("Invalid token");
        }
    }
}
