package com.users.service;

import com.users.model.User;

import java.util.List;

public interface UserService {
    public void saveUser(User user);
    List<User> findAllUsers();
    User findByuname(User user);

}
