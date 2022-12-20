package com.Ezenweb.domain.entity.room;

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
    private MemberEntity memberEntity;

    @OneToMany(mappedBy = "roomEntity")
    @Builder.Default
    @ToString.Exclude
    private List<RoomImgEntity> roomImgEntityList=new ArrayList<>();

}
