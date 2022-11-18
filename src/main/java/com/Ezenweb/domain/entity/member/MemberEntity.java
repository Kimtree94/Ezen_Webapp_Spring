package com.Ezenweb.domain.entity.member;

import com.Ezenweb.domain.Dto.MemberDto;
import com.Ezenweb.domain.entity.BaseEntity;
import com.Ezenweb.domain.entity.board.BoardEntity;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity // 해당 연결된 DB의 테이블과 매핑 [ 연결 ]
@Table(name = "member")//db에서 사용될 테이블 이름
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class MemberEntity extends BaseEntity {
    //1. 필드
    @Id// 엔티티당 무조건 1개이상 들어가야한다 [ PK ]
    @GeneratedValue(strategy = GenerationType.IDENTITY)//자동번호 부여 (auto increment 와 같다고 보면됨 )
    private int mno; // 회원번호 필드

    @Column(nullable = false) // not null 과 같은 개념
    private String memail;//회원이메일

    @Column(nullable = false) // not null
    private String mpassword; // 회원 비밀버ㅏㄴ호 필드

    @Column(nullable = false) // not null 과 같은 개념
    private String mphone; // 회원 전화번호 필드

    @OneToMany(mappedBy = "memberEntity") //[ 1:n ]PK에 해당하는 어노테이션  mappedBy = fk의 필드명
    @Builder.Default//빌더 사용시 해당 필드의 초기값 설정
    private List<BoardEntity> boardEntityList = new ArrayList<>();


    // 2. 생성자 [ 롬복으로 사용 ]
    // 3. 메소드 [ 롬복으로 사용 ]
    // * 엔티티 --> Dto
    public MemberDto toDto() {
        return MemberDto
                .builder() // 빌더 메소드 시작
                .mno(this.mno)
                .memail(this.memail)
                .mpassword(this.mpassword)
                .mphone(this.mphone)
                .build(); // 빌드 메소드 끝
    }
}
