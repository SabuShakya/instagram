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

    public boolean getAdmin(String userId,AdminDto admin) {
        Admin adminFromrepo=adminRepository.getAdminByUserId(userId);
        if (adminFromrepo.getPassword().equals(admin.getPassword())){
            return true;
        }
        return  false;
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