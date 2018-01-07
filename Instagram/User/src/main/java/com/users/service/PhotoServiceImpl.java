package com.users.service;
import com.users.dto.UserPhotodto;
import com.users.model.UserPhotos;
import com.users.repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.List;

@Service
@Transactional
public class PhotoServiceImpl implements PhotoService {

   @Autowired
   private PhotoRepository photoRepository;

    public void savePhoto (String imageName)throws IOException{
//        byte[] imageByte= Base64.decodeBase64(imageName);
        try {
            byte[] scanBytes = Base64.getDecoder().decode(imageName);
            FileOutputStream fout = new FileOutputStream
                    ("/home/smriti/Desktop/Softwares/apache-tomcat-8.5.24/uploads");
            fout.write(scanBytes);
            fout.close();
            System.out.println("success");
        }
        catch (IOException e){
            System.out.println("Error");
        }


        photoRepository.save(imageName);
    }
}
