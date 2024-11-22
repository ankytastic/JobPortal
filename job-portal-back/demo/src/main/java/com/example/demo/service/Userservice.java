package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.Userrepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class Userservice {
    @Autowired
    private Userrepository userRepository;

    public User saveUser(User user){
        return userRepository.save(user);
    }
    
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);  // Query user by email
    }
}
