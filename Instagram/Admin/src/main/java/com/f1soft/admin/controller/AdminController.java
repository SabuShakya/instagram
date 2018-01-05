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

    @GetMapping("/login/{userId}")
    public ResponseEntity<Admin> getAdmin(@PathVariable("userId")String userId){
       Admin isAdmin=adminService.getAdmin(userId);
        System.out.println(isAdmin);
        if(isAdmin !=null){
            return new ResponseEntity(isAdmin,HttpStatus.OK);
        }
        return new ResponseEntity<Admin>(isAdmin, HttpStatus.NOT_FOUND);
    }

    @PostMapping("/signup")
    public ResponseEntity<Boolean> saveAdmin(@RequestBody Admin admin){
         adminService.createAdmin(admin);
         return new ResponseEntity<Boolean>(true,HttpStatus.OK);
    }

    @GetMapping("/edit/{userId}")
    public ResponseEntity<Admin> getAdminByUserId(@RequestBody Admin admin,
                                                  @PathVariable("userId")String userId){
        Admin ad = adminService.getAdminByUserId(userId);
        return new ResponseEntity<Admin>(ad,HttpStatus.FOUND);
    }

    @PostMapping("/edit")
    public ResponseEntity<Boolean> updateAdmin(@RequestBody Admin admin){
        adminService.updateAdmin(admin);
        return new ResponseEntity<Boolean>(true,HttpStatus.OK);
    }

    @GetMapping("/viewExistingAdmin")
    public ResponseEntity<List<Admin>> viewLog(){
        List<Admin> adminList=adminService.getAllAdmins();
        return new ResponseEntity<List<Admin>>(adminList,HttpStatus.OK);
    }
}
