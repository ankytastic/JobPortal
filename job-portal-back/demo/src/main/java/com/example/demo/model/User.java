package com.example.demo.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="registration")
public class User {
    @Id
    private String username;
    private String email;
    private String password;

    public User(){

    }

    public User(String username,String email,String password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setUsername(String username) {
        this.username=username;
    }

    public void setEmail(String email) {
        this.email=email;
    }

    public void setPassword(String password) {
        this.password=password;
    }
    
}
