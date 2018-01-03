package com.f1soft.admin.service;

import com.f1soft.admin.dto.AdminDto;
import com.f1soft.admin.model.Admin;

import java.util.List;

public interface AdminService {
    public boolean getAdmin(String userId,AdminDto admin);
    public void createAdmin(Admin admin);
    public Admin getAdminByUserId(String userId);
    public void updateAdmin(Admin admin);
    public List<Admin> getAllAdmins();
    public void deleteAdmin(Admin admin);
}
