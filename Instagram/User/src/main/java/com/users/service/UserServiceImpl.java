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

    private static List<User> users;
    @Resource
    private UserRepository userRepository;

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public User findByuname(String uname){
//       User u = userRepository.getByUname(user.getUname());
//       if((user.getUname().equals(u.getUname()))){
//           return u;
//       }
//       return null;

        for(User user : users){
            if(user.getUname().equalsIgnoreCase(uname)){
                return user;
            }
        }
        return null;
    }

   public List<User> findAllUsers(){
        List<User> ulist = new ArrayList<User>();
        ulist = userRepository.findAll();
        return ulist;
   }

   public boolean userExist(User user){
        return findByuname(user.getFirstName())!=null;
   }

}


