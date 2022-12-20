package com.Ezenweb.domain.Dto;

import com.Ezenweb.domain.entity.room.RoomEntity;
import com.Ezenweb.domain.entity.room.RoomImgEntity;
import com.Ezenweb.domain.entity.room.RoomImgRepository;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor@NoArgsConstructor
@Getter@Setter@ToString@Builder
public class RoomDto {
    private String rtitle;
    private String rprice;
    private String rtrans;
    private List<MultipartFile> rimg;
    private String rname;
    private String rlat;
    private String rlng;


//    @Autowired
//    private RoomImgRepository roomImgRepository;

    public RoomEntity toEntity(){
        //이미지 리스트
 /*       ArrayList<RoomImgEntity> list = new ArrayList<RoomImgEntity>();
        for(MultipartFile file:rimg){
            if(file.getOriginalFilename().equals("")){
//                file.transferTo( );// 이미지 업로드
                RoomImgEntity roomImgEntity = new RoomImgEntity();
                roomImgEntity.setRimg(file.getOriginalFilename());
               list.add(roomImgRepository.save(roomImgEntity));
            }

        }
*/
       return RoomEntity.builder()
               .rtitle(this.rtitle)
               .rprice(this.rprice)
               .rtrans(this.rtrans)
               .rname(this.rname)
               .rlat(this.rlat)
               .rlng(this.rlng)
               .build();
    }
}
