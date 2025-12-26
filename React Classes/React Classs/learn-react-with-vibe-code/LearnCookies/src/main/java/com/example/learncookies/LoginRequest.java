// LearnCookies/src/main/java/LearnCookies/LoginRequest.java
package com.example.learncookies;

// LoginRequest class is a Data Transfer Object (DTO) which we go use to bind incoming JSON from HTTP requests
// to Java objects. when a client send a POST request with JSON body containing email and password,
// Spring Boot go automatically convert that JSON to this LoginRequest object

//@Data
public class LoginRequest {

    // email field to store the user email address from the login request
    // this field will be populated from the JSON payload sent by the client
    private String email;

    // password field to store the user password from the login request
    // this field will be populated from the JSON payload sent by the client
    private String password;

    // Default constructor (no arguments) which Spring Boot need when it dey
    // deserialize JSON to Java object
    // without this constructor, Spring Boot go throw an error when it try to create
    // LoginRequest object from JSON
    public LoginRequest() {
    }

    // Parameterized constructor which we fit use to create LoginRequest object with
    // email and password
    // this constructor dey accept email and password and assign am to the fields
    public LoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    // getEmail() method to retrieve the email field value
    // return the email address that was set in the login request
    public String getEmail() {
        return email;
    }

    // setEmail() method to set the email field value
    // email parameter is the email address we want to set
    public void setEmail(String email) {
        this.email = email;
    }

    // getPassword() method to retrieve the password field value
    // return the password that was set in the login request
    public String getPassword() {
        return password;
    }

    // setPassword() method to set the password field value
    // password parameter is the password we want to set
    public void setPassword(String password) {
        this.password = password;
    }
}
