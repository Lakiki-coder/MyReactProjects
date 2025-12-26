// LearnCookies/src/main/java/LearnCookies/AuthController.java
package com.example.learncookies;

// we import org.springframework.http.ResponseEntity because we go use am for sending HTTP responses
// we import org.springframework.web.bind.annotation.RestController because we go use am to define REST controllers
// we import org.springframework.web.bind.annotation.PostMapping because we go use am to map HTTP POST requests to handler methods
// we import org.springframework.web.bind.annotation.RequestBody because we go use am to bind the HTTP
// request body to a method parameter
// we import org.springframework.web.bind.annotation.RequestMapping because we go use am to map HTTP requests to handler classes or methods
// we import jakarta.servlet.http.Cookie because we go use am to create and manage cookies
// we import jakarta.servlet.http.HttpServletResponse because we go use am to send HTTP responses
// we import io.jsonwebtoken.Jwts because we go use am to create and parse JWTs
// we import io.jsonwebtoken.SignatureAlgorithm because we go use am to specify the signature algorithm
// we import io.jsonwebtoken.security.Keys because we go use am to generate signing keys
// we import java.util.Date because we go use am to handle date and time
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.util.Date;

// we use @RestController to define this class as a REST controller because e go handle HTTP requests
// we use @RequestMapping to map HTTP requests to /auth path
// we use @SuppressWarnings("all") to suppress all warnings in this class
@SuppressWarnings("all")
@RestController
@RequestMapping("/auth")

// AuthController class to handle authentication-related HTTP requests
public class AuthController {

    // we use @PostMapping to map HTTP POST requests to /login path
    @PostMapping("/login")

    // <?> means the response body fit be of any type
    // we use request body to get the login request data befoe we send am to the
    // server
    // we use HttpServletResponse to send HTTP responses back to the client which is
    // define for us by Spring Boot
    public ResponseEntity<?> login(
            @RequestBody LoginRequest request,
            HttpServletResponse response) {

        // 1. check email + password (pretend)
        // .equals na method wey dey compare two strings which we dey use to check if
        // the email wey the user send match the one wey we get for our system
        // .equals go return true if the two strings match, otherwise e go return false
        // if the email no match, we go return HTTP 401 Unauthorized status with
        // "Invalid login" message
        // .status na method wey dey set the HTTP status code for the response and is a
        // method from ResponseEntity class
        // .body na method wey dey set the response body and is a method from
        // ResponseEntity class

        if (!request.getEmail().equals("test@gmail.com")) {
            return ResponseEntity.status(401).body("Invalid login");
        }

        // 2. create fake JWT
        // for now, we go just create a fake JWT token string "jwt-token-123" which we
        // go use as our token which means say the user don successfully login
        // if we want to use real jwt token, we for call generateToken method wey dey
        // below and pass the email as parameter which the code may look like

        String token = "jwt-token-123";

        // 3. create cookie
        //
        Cookie cookie = new Cookie("token", token);
        cookie.setHttpOnly(true); // JS no fit read am
        cookie.setSecure(false); // true in production
        cookie.setPath("/");
        cookie.setMaxAge(60 * 60); // 1 hour

        // 4. send cookie to browser
        response.addCookie(cookie);

        return ResponseEntity.ok("Login success");
    }

    private final String SECRET = "my-super-secret-key";

    public String generateToken(String email) {

        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(
                        new Date(System.currentTimeMillis() + 1000 * 60 * 60))
                .signWith(
                        Keys.hmacShaKeyFor(SECRET.getBytes()),
                        SignatureAlgorithm.HS256)
                .compact();
    }

    public String validateToken(String token) {

        return Jwts.parserBuilder()
                .setSigningKey(SECRET.getBytes())
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}
