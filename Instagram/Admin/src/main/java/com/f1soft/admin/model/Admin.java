package com.f1soft.admin.model;

import lombok.Getter;
import lombok.Setter;
import sun.security.util.Password;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Table(name = "admin_info")
@Getter
@Setter
public class Admin implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id",nullable = false)
    private String userId;

    @Column(name = "password" ,nullable = false)
    private Password password;
}
