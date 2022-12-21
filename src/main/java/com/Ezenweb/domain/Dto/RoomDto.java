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
    private List<MultipartFile> rimg; // 저장용 이미지 인터페이스
    private String rname;
    private String rlat;
    private String rlng;
    private String memail;//작성자
    private int rno;

    private List<String> getrimg; // 출려용 이미지

    public RoomEntity toEntity(){

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
