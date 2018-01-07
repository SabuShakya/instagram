package com.users.controller;


import com.users.model.User;

//import com.users.service.PhotoService;
import com.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@RequestMapping("")
public class AppController {
    @Autowired
    private UserService userService;

//    @Autowired
//    private PhotoService photoService;

    @GetMapping("/allusers")
    public ResponseEntity<List<User>> listAllUsers() {
        List<User> users = userService.findAllUsers();
        HttpHeaders httpHeaders= new HttpHeaders();

        if(users.isEmpty()){
            return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<User>>(users, httpHeaders, HttpStatus.OK);
    }

    @PostMapping(value = "/signup", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> createUser(@RequestBody User user) {

//        if (userService.userExist(user)){
//            System.out.println("A User with name " + user.getUname() + " already exist");
//            return new ResponseEntity<Boolean>(HttpStatus.CONFLICT);
//        }

        userService.saveUser(user);
        return new ResponseEntity<Boolean>(true, HttpStatus.CREATED);
    }

    @GetMapping("/login/{uname}")
    public ResponseEntity<Boolean> verifyUser(@RequestBody User user, @PathVariable("uname")String uname){

        boolean luser =userService.loginUser(uname, user);

        if(luser){
            return new ResponseEntity(true,HttpStatus.OK);
        }
        return new ResponseEntity<Boolean>(false, HttpStatus.NOT_FOUND);
    }

//    @PostMapping("/upload")
//    public ResponseEntity<Boolean> upload(@RequestBody String imageName){
//
//        photoService.savePhoto(imageName);
//        return new ResponseEntity<Boolean>(HttpStatus.OK);
//    }
}
