package com.users.service;

import com.users.model.User;
import com.users.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional("transactionManager")
public class UserServiceImpl implements UserService {
    @Resource
    private UserRepository userRepository;

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public User findByuname(User user){
       User u = userRepository.getByUname(user.getUname());
       if((user.getUname().equals(u.getUname()))){
           return u;
       }
       return null;
    }

   public List<User> findAllUsers(){
        List<User> ulist = new ArrayList<User>();
        ulist = userRepository.findAll();
        return ulist;
   }

}


