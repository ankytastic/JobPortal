package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.LoginRequest;
import com.example.demo.model.User;
import com.example.demo.service.Userservice;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:5173")
public class Usercontroller {

    @Autowired
    private Userservice userService;
    
    @PostMapping("/registration")
    public User register(@RequestBody User user){
        return userService.saveUser(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody LoginRequest loginRequest) {
        // Fetch user by email
        User user = userService.findByUsername(loginRequest.getUsername());

        // Check if user exists and password matches
        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            return user; // Successful login
        } else {
            throw new RuntimeException("Invalid email or password"); // Authentication failure
        }
    }
}
