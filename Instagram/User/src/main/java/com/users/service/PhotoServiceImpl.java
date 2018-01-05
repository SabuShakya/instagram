package com.users.service;
import com.users.dto.UserPhotodto;
import com.users.model.UserPhotos;
import com.users.repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PhotoServiceImpl implements PhotoService {

   @Autowired
   private PhotoRepository photoRepository;

    public void savePhoto(String imageName){
        // file handling part left


//        photoRepository.save();
    }
}
