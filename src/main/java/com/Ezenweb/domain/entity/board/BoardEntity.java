package com.Ezenweb.domain.entity.board;

import com.Ezenweb.domain.Dto.BoardDto;
import com.Ezenweb.domain.entity.BaseEntity;
import com.Ezenweb.domain.entity.bcategory.BcategoryEntity;
import com.Ezenweb.domain.entity.member.MemberEntity;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity // 엔티티 정의
@Table(name = "board")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class BoardEntity extends BaseEntity {
    //1.필드
    @Id //pk
    @GeneratedValue(strategy = GenerationType.IDENTITY)//autoIncrement
    private int bno;              //게시물번호
    @Column(nullable = false)       //not null
    private String btitle;        //게시물제목
    @Column(nullable = false, columnDefinition = "text")       //not null , length = 저장가능한 길이 기본값 255
    private String bcontent;      //게시물내용
    //카테고리 [ 카테고리-fk ]
    @Column(nullable = false)       //not null
    @ColumnDefault("0")           //JPA insert 할 경우 default
    private int bview;            //조회수
    @Column
    private String bfile;
    //작성일 , 수정일 -> 상속( 여러 엔티티해서 사용되는 필드라서 )

    //연관관계 1[ 회원번호[pk]<-----양방향---->게시물번호[fk]
    @ManyToOne// [ 1:n ] FK 에 해당 어노테이션
    @JoinColumn(name = "mno")// 테이블에서 사용할  fk의 필드명 정의
    @ToString.Exclude // 해당 필드는 ToString 사용하지 않는다. = > 양방향일때 toString을 서로불러서 무한루프에 빠진다 필수기입!
    private MemberEntity memberEntity; // PK에 엔티티 객체

    //연관관계2 [ 카테고리번호[pk]<------양방향---->게시물번호[fk]
    @ManyToOne // [1:n] FK에 해당 어노테이션
    @JoinColumn(name = "bcno")// 테이
    @ToString.Exclude
    private BcategoryEntity bcategoryEntity;

    //1.형변환

    public BoardDto toDto() {
        return BoardDto.builder() // 빌더패턴을 이용한 객체생성
                .bno(this.bno)
                .btitle(this.btitle)
                .bcontent(this.bcontent)
                .bview(this.bview)
                .memail(this.memberEntity.getMemail())
                .bfilename(this.bfile)
                .bdate(
                        this.getCdate().toLocalDate().toString().equals(LocalDateTime.now().toLocalDate().toString()) ?
                                this.getCdate().toLocalTime().format(DateTimeFormatter.ofPattern("HH:mm:ss")) :
                                this.getCdate().toLocalDate().toString()
                )
                .build();
    }
}
/*
    자바 ----------------------->DB자료형
    int                          int
    double float                 float
    String                       varchar

    자바자료형을 안쓰고 columnDefinition ="DB자료형" 을사용하면 변경된다

 */
/*
 //연관관계  - 앞에 들어가는 값이 현재 클래스의 제약조건
    @OneToOne       : 1:1   회원이 하나의 게시물만 작성 가능
    @ManyToOne      : n:1   회원이 여러개의 게시물을 작성 가능
    @oneToMany      : 1:n
    @ManyToOne      : n:1
    @Column(nullable = false) //
 */