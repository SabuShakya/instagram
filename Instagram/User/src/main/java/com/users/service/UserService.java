package com.users.service;

import com.users.model.User;

import java.util.ArrayList;
import java.util.List;

public interface UserService {
    public void saveUser(User user);
    public List<User> findAllUsers();
    public User findByuname(String uname);
    public boolean userExist(User user);

}
