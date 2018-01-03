package com.users.controller;

import com.users.model.User;
import com.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.awt.*;

@RestController
//@RequestMapping("")
public class AppController {
    @Autowired
    private UserService userService;

    @PostMapping(value = "/signup", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> signupRegister(@RequestBody User user, UriComponentsBuilder uriComponentsBuilder) {

        if(user.getUname()!=null){
            return new ResponseEntity<Boolean>(true, HttpStatus.CONFLICT);
        }

        userService.saveUser(user);
        return new ResponseEntity<Boolean>(true,HttpStatus.CREATED);
    }

//    @GetMapping("/login")
//    public ResponseEntity<Boolean> login(@RequestBody User user){
//
//    }
}
