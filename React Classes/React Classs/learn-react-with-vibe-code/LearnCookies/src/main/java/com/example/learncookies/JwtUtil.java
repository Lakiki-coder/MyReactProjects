// LearnCookies/src/main/java/LearnCookies/JwtUtil.java
package com.example.learncookies;

// we import org.springframework.stereotype.Component because we go use am to define this class as a Spring Bean
// we import io.jsonwebtoken.Jwts because we go use am to create and parse JWT tokens
// we import io.jsonwebtoken.SignatureAlgorithm because we go use am to specify the signature algorithm for signing tokens
// we import io.jsonwebtoken.security.Keys because we go use am to generate signing keys for JWT
// we import java.util.Date because we go use am to handle date and time for token expiration
import org.springframework.stereotype.Component;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.util.Date;

// we use @Component to make this class a Spring Bean which means Spring Boot go manage am for us
// and we fit inject am into other classes using @Autowired
@Component

// JwtUtil class for generating and validating JWT tokens
public class JwtUtil {

        // we use private final String SECRET to store our secret key which we go use to
        // sign our JWT tokens
        // this key must be kept safe and should be stored in environment variables in
        // production
        private final String SECRET = "my-super-secret-key";

        // generateToken method to create a new JWT token for a user
        // email parameter is the subject of the token which we go include in the token
        // return the JWT token as a string which we fit send to the client
        public String generateToken(String email) {

                // Jwts.builder() dey create a new JWT builder which we go use to build our
                // token
                // .setSubject(email) dey set the subject of the token which go be the user
                // email
                // .setIssuedAt(new Date()) dey set the time when the token was issued which go
                // be the current time
                // .setExpiration() dey set the expiration time of the token which go be 1 hour
                // from now
                // .signWith() dey sign the token with our secret key using HS256 algorithm
                // .compact() dey serialize the token and return am as a string
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

        // validateToken method to verify and extract information from a JWT token
        // token parameter is the JWT token string which we go validate
        // return the subject (email) from the token if the token is valid
        // if the token is invalid or expired, it go throw an exception
        public String validateToken(String token) {

                // Jwts.parser() dey create a new JWT parser which we go use to parse our token
                // .verifyWith(key) dey set the signing key which must match the key we use to
                // sign the token
                // .build() dey create the parser
                // .parseSignedClaims(token) dey parse and verify the JWT token
                // .getPayload() dey get the claims (payload) from the token
                // .getSubject() dey get the subject which is the email we set when creating the
                // token
                return Jwts.parser()
                                .verifyWith(Keys.hmacShaKeyFor(SECRET.getBytes()))
                                .build()
                                .parseSignedClaims(token)
                                .getPayload()
                                .getSubject();
        }
}
