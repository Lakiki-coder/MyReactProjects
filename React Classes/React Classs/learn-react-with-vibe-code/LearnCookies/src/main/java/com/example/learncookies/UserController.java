// LearnCookies/src/main/java/LearnCookies/UserController.java
package com.example.learncookies;

// we import org.springframework.web.bind.annotation.RestController because we go use am to define this as a REST controller
// which mean this class go handle HTTP requests and return JSON responses
import org.springframework.web.bind.annotation.RestController;

// we import org.springframework.web.bind.annotation.RequestMapping because we go use am to define the base path for all endpoints
// in this controller (in our case "/user")
import org.springframework.web.bind.annotation.RequestMapping;

// we import org.springframework.web.bind.annotation.GetMapping because we go use am to handle HTTP GET requests
import org.springframework.web.bind.annotation.GetMapping;

// we import org.springframework.web.bind.annotation.CookieValue because we go use am to extract values from HTTP cookies
// sent by the client in the request
import org.springframework.web.bind.annotation.CookieValue;

// we import org.springframework.http.ResponseEntity because we go use am to return HTTP responses with status codes and body
import org.springframework.http.ResponseEntity;

// we import org.springframework.beans.factory.annotation.Autowired because we go use am to inject JwtUtil bean into this controller
import org.springframework.beans.factory.annotation.Autowired;

// we use @RestController to tell Spring that this class dey handle HTTP requests and return JSON responses automatically
@RestController

// we use @RequestMapping("/user") to set the base path for all endpoints in
// this controller
// all endpoints in this controller go start with "/user" (e.g.,
// "/user/profile")
@RequestMapping("/user")

// UserController class which dey handle all user-related endpoints like getting
// user profile
public class UserController {

    // we use @Autowired to inject JwtUtil bean into this controller
    // Spring go automatically find JwtUtil and create an instance of am which we
    // fit use in this class
    @Autowired
    private JwtUtil jwtUtil;

    // we use @GetMapping("/profile") to handle HTTP GET requests to "/user/profile"
    // endpoint
    public ResponseEntity<?> profile(

            // we use @CookieValue to extract the "token" cookie from the HTTP request
            // required = false dey mean the token cookie be optional (the client don't have
            // to send am)
            // if the client don't send the token cookie, am go be null
            @CookieValue(name = "token", required = false) String token) {

        // we check if token be null which mean the client don't send any token cookie
        if (token == null) {
            // we return HTTP status 401 (Unauthorized) with message "No token"
            return ResponseEntity.status(401).body("No token");
        }

        // we use try-catch to handle exceptions that may happen when validating the
        // token
        try {

            // we call jwtUtil.validateToken(token) to validate the token and extract the
            // email from am
            // if the token be valid, validateToken go return the email
            // if the token be invalid or expired, validateToken go throw an exception
            String email = jwtUtil.validateToken(token);

            // if we reach here, it mean the token be valid
            // we return HTTP status 200 (OK) with message "Welcome {email}"
            return ResponseEntity.ok("Welcome " + email);

        } catch (Exception e) {
            // if an exception happen during token validation, am mean the token be invalid
            // or expired
            // we return HTTP status 403 (Forbidden) with message "Invalid token"
            return ResponseEntity.status(403).body("Invalid token");
        }
    }
}
