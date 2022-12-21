package com.Ezenweb.domain.entity.room;

import com.Ezenweb.domain.Dto.RoomDto;
import com.Ezenweb.domain.entity.member.MemberEntity;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="room")
@Entity
public class RoomEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rno;
    private String rtitle;
    private String rprice;
    private String rtrans;
    private String rname;
    private String rlat;
    private String rlng;

    @ManyToOne
    @JoinColumn(name = "mno")
    @ToString.Exclude
    private MemberEntity memberEntity;  // 작성자가 엔티티

    @OneToMany(mappedBy = "roomEntity")
    @Builder.Default
    @ToString.Exclude
    private List<RoomImgEntity> roomImgEntityList=new ArrayList<>();

    public RoomDto toDto(){

        // 이미지 엔티티에서 이미지 이름만 추출
        List<String> list = new ArrayList<>();
        roomImgEntityList.forEach((img)->{
            list.add(img.getRimg());
        });
        return RoomDto.builder()
                .rno(this.rno)
                .rtitle(this.rtitle)
                .rprice(this.rprice)
                .rtrans(this.rtrans)
                .rname(this.rname)
                .rlat(this.rlat)
                .rlng(this.rlng)
                //작성자
                .memail(this.getMemberEntity().getMemail())
                //이미지들
                .getrimg(list)
                .build();
    }

}
