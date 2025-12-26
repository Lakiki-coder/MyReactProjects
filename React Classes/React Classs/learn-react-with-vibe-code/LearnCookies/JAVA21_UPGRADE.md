# Java 21 LTS Upgrade - LearnCookies Project

## Upgrade Summary

This project has been successfully upgraded from an unspecified Java version to **Java 21 LTS** (Long-Term Support).

### Key Changes

#### 1. **pom.xml Configuration**
   - Maven compiler source and target: **21**
   - Spring Boot version: **3.2.0** (Java 21 compatible)
   - Maven Compiler Plugin: **3.11.0**
   - Spring Boot Maven Plugin: **3.2.0**

#### 2. **Dependencies Updated**
   - **Spring Boot Starter Web** 3.2.0
   - **JWT (JJWT)** 0.12.3 for authentication
   - **JUnit** 4.13.2 for testing

#### 3. **Java 21 Features Enabled**
   - Virtual Threads support (Project Loom)
   - Pattern Matching enhancements
   - Record classes
   - Sealed classes
   - Text Blocks

### Build & Deployment

#### Java 21 Installation
```
JDK Location: c:\Users\USER\.jdk\jdk-21.0.8(1)
Vendor: Microsoft (Adoptium)
Version: 21.0.8
```

#### Maven Setup
```
Maven Location: c:\Users\USER\.maven\maven-3.9.12(1)
Version: 3.9.12
```

### Building the Project

To build with Java 21, set the environment variables and run Maven:

```powershell
$env:JAVA_HOME = "c:\Users\USER\.jdk\jdk-21.0.8(1)"
$env:PATH = "c:\Users\USER\.maven\maven-3.9.12(1)\bin;$env:PATH"
mvn clean install
```

Or on Linux/macOS:

```bash
export JAVA_HOME=/path/to/jdk-21
export PATH=/path/to/maven/bin:$PATH
mvn clean install
```

### Build Output

```
[INFO] BUILD SUCCESS
[INFO] Total time: 20.484 s
[INFO] Finished at: 2025-12-26T03:26:14+01:00
```

The project builds successfully with Java 21 with no compilation errors.

### Commit Information

- **Commit Hash**: 2c452ad
- **Message**: "Upgrade to Java 21 LTS - Configure Maven with Java 21 compiler and Spring Boot 3.2.0"
- **Files Modified**: pom.xml (75 insertions)

### Next Steps (Optional)

1. **Update CI/CD Pipeline**: Ensure your CI/CD system uses Java 21 JDK
2. **Code Modernization**: Consider using Java 21 features like:
   - Virtual Threads for async operations
   - Pattern matching in method implementations
   - Records for data classes
3. **Testing**: Run comprehensive test suite with Java 21
4. **Performance Testing**: Benchmark against previous Java versions

### References

- [Java 21 Documentation](https://docs.oracle.com/en/java/javase/21/)
- [Spring Boot 3.2.0 Release Notes](https://spring.io/blog/2023/11/09/spring-boot-3-2-0-available-now)
- [Java LTS Versions](https://www.oracle.com/java/technologies/java-se-support-roadmap.html)

---

**Upgrade Completed**: December 26, 2025
