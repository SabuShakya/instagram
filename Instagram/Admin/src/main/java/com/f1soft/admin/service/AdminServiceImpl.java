package com.f1soft.admin.service;

import com.f1soft.admin.dto.AdminDto;
import com.f1soft.admin.model.Admin;
import com.f1soft.admin.repository.AdminRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional("transactionManager")
public class AdminServiceImpl implements AdminService{

    @Resource
    private AdminRepository adminRepository;

    public Admin getAdmin(String userId) {
        Admin adminFromrepo= adminRepository.getAdminByUserId(userId);
        System.out.println(adminFromrepo);
        if (adminFromrepo !=null){
                return adminFromrepo;
        }
        return  null;
    }

    public void createAdmin(Admin admin) {
        adminRepository.save(admin);
    }

    public Admin getAdminByUserId(String userId) {
        return adminRepository.getAdminByUserId(userId);
    }

    public void updateAdmin(Admin admin) {
        adminRepository.saveAndFlush(admin);
    }

    public List<Admin> getAllAdmins() {
        List<Admin> adminList = adminRepository.findAll();
        return adminList;
    }

    public void deleteAdmin(Admin admin) {
        adminRepository.delete(admin);

    }
}
