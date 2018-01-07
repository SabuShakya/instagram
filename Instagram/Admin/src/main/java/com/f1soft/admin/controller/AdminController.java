package com.f1soft.admin.controller;

import com.f1soft.admin.dto.AdminDto;
import com.f1soft.admin.model.Admin;
import com.f1soft.admin.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public ResponseEntity<Boolean> getAdmin(@RequestBody AdminDto adminDto){
       Admin isAdmin=adminService.getAdmin(adminDto.getUserId());
       System.out.println(isAdmin);
       if((isAdmin !=null)&&(isAdmin.getPassword().equals(adminDto.getPassword()))){
            return new ResponseEntity<Boolean>(true,HttpStatus.OK);
       }
        return new ResponseEntity<Boolean>(false, HttpStatus.NOT_FOUND);
    }

    @PostMapping("/signup")
    public ResponseEntity<Boolean> saveAdmin(@RequestBody Admin admin){
         adminService.createAdmin(admin);
         return new ResponseEntity<Boolean>(true,HttpStatus.OK);
    }

    @PostMapping("/update")
    public ResponseEntity<Boolean> updateAdmin(@RequestBody Admin admin){
        adminService.updateAdmin(admin);
        return new ResponseEntity<Boolean>(true,HttpStatus.OK);
    }

    @GetMapping("/getAllAdmins")
    public ResponseEntity<List<Admin>> viewLog(){
        List<Admin> adminList=adminService.getAllAdmins();
        if(adminList != null){
        return new ResponseEntity<List<Admin>>(adminList,HttpStatus.OK);
        }
        return new ResponseEntity<List<Admin>>(adminList,HttpStatus.NOT_FOUND);
    }
    @PostMapping("/delete")
    public ResponseEntity<Boolean> deleteAdmin(){

    }
}
