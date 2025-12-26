// LearnCookies/src/main/java/LearnCookies/Main.java
package com.example.learncookies;

// we import org.springframework.boot.SpringApplication because we go use am to start the Spring Boot application
import org.springframework.boot.SpringApplication;

// we import org.springframework.boot.autoconfigure.SpringBootApplication because we go use am as an annotation
// to configure our application as a Spring Boot application with automatic configuration enabled
import org.springframework.boot.autoconfigure.SpringBootApplication;

// we use @SpringBootApplication annotation to tell Spring Boot that this be the entry point of our application
// this annotation dey enable auto-configuration which mean Spring Boot go automatically configure our application
// based on the dependencies we have in our pom.xml file. it also dey scan for Spring components in the same package
// and sub-packages so Spring Boot go find our controllers and services
@SpringBootApplication

// Main class which be the entry point for the application
public class Main {

    // main method which be the starting point when we run the application
    // args is the command line arguments we fit pass when running the application
    // inside this method we go call SpringApplication.run() to start the Spring
    // Boot application
    public static void main(String[] args) {

        // SpringApplication.run() dey start the Spring Boot application
        // Main.class dey tell Spring Boot to use the Main class as the starting point
        // for scanning components
        // this method go create the application context, scan for components, and start
        // the embedded Tomcat server
        SpringApplication.run(Main.class, args);
    }
}
