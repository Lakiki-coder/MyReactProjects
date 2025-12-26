# LearnCookies - Copilot Instructions

## Project Overview
**LearnCookies** is a Spring Boot 3.2.0 project (Java 21 LTS) designed to learn cookie and JWT-based authentication patterns. The project uses Maven for builds and includes JWT (JJWT 0.12.3) for token-based security.

## Architecture & Key Components

### Tech Stack
- **Runtime**: Java 21 LTS (supports Virtual Threads, Pattern Matching, Records, Sealed Classes)
- **Framework**: Spring Boot 3.2.0 with Spring Web
- **Authentication**: JWT tokens via JJWT 0.12.3
- **Build**: Maven 3.9.12
- **Testing**: JUnit 4.13.2

### Project Structure
```
LearnCookies/
├── src/main/java/LearnCookies/    # Main application code (Java sources go here)
├── pom.xml                         # Maven configuration with Java 21 & Spring Boot 3.2.0
├── JAVA21_UPGRADE.md              # Documentation of Java 21 migration
└── .github/                        # GitHub workflows & metadata
```

## Build & Development Workflow

### Build Command
```bash
mvn clean install
```
- Requires Java 21 JDK and Maven 3.9.12
- Environment setup (PowerShell):
  ```powershell
  $env:JAVA_HOME = "c:\Users\USER\.jdk\jdk-21.0.8(1)"
  $env:PATH = "c:\Users\USER\.maven\maven-3.9.12(1)\bin;$env:PATH"
  mvn clean install
  ```

### Running Tests
```bash
mvn test
```
Uses JUnit 4.13.2 for test execution.

### Running Application
```bash
mvn spring-boot:run
```
Launches Spring Boot web application with embedded Tomcat.

## Key Patterns & Conventions

### Java 21 Features
When implementing new code, consider using:
- **Virtual Threads** for async I/O operations (use `Platform.startVirtualThread()`)
- **Records** for DTO classes instead of traditional getters/setters
- **Sealed Classes** for JWT claims type hierarchies
- **Text Blocks** for long multi-line strings in documentation

### JWT Authentication Pattern
The project uses JJWT 0.12.3. When implementing token handling:
1. Create JWT claims using `Jwts.builder()` with payload data
2. Sign with a secret key (ensure key management via environment variables)
3. Parse and validate tokens in request filters
4. Extract claims for authorization decisions in controllers/services

### Spring Boot Structure
- **Controllers**: Use `@RestController` in `src/main/java/LearnCookies/` for HTTP endpoints
- **Services**: Implement business logic with `@Service` annotation
- **Filters**: Use Spring's filter chain for JWT validation middleware

## Dependencies & Integration Points

### Critical Dependencies
- `spring-boot-starter-web`: HTTP server & REST support (no explicit version = uses Spring Boot BOM)
- `jjwt-api`: JWT creation/parsing (0.12.3)
- `jjwt-impl`: Runtime JWT implementation
- `jjwt-jackson`: JSON serialization for JWT payloads

### No External Services
This is a learning project with no database, message queues, or external API integrations configured. Add these as needed via Maven dependencies.

## Common Developer Tasks

### Adding a New REST Endpoint
1. Create a controller class in `src/main/java/LearnCookies/` with `@RestController`
2. Use `@GetMapping`, `@PostMapping` etc. with appropriate path
3. Inject `JwtTokenProvider` or similar service for token validation
4. Return `ResponseEntity<T>` with appropriate HTTP status

### Implementing JWT Token Generation
- Use `Jwts.builder()` to construct tokens
- Set expiration with `.expiration(new Date(System.currentTimeMillis() + 3600000))`
- Sign with `SignatureAlgorithm.HS256` or stronger
- Store secret key in `application.properties` or environment variables (never hardcode)

### Testing Authentication Logic
- Mock JWT token generation in tests
- Use `@SpringBootTest` with `TestRestTemplate` for integration tests
- Validate both success (valid token) and failure (expired/invalid token) cases

## Important Notes

### Java 21 Migration
See [JAVA21_UPGRADE.md](../JAVA21_UPGRADE.md) for complete upgrade details. The project successfully builds with Java 21 with no errors.

### Cookie vs JWT
This project focuses on **JWT token-based auth** (stateless), not traditional HTTP cookies. Both can be used together for enhanced security.

### Code Generation Guidance
- Always generate unit tests alongside new controllers/services
- Follow Spring's naming conventions (`*Controller`, `*Service`, `*Repository`)
- Use dependency injection via constructors (Spring's best practice)
- Leverage Java 21 records for immutable data transfer objects
