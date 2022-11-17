package com.Ezenweb.domain.entity;

import com.Ezenweb.domain.Dto.BoardDto;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity // 엔티티 정의
@Table(name="board")
@AllArgsConstructor@NoArgsConstructor
@Getter@Setter@Builder
public class BoardEntity {
    //1.필드
    @Id //pk
    @GeneratedValue(strategy = GenerationType.IDENTITY)//autoIncrement
    private int bno;              //게시물번호
    @Column(nullable = false)       //not null
    private String btitle;        //게시물제목
    @Column(nullable = false , columnDefinition ="text")       //not null , length = 저장가능한 길이 기본값 255
    private String bcontent;      //게시물내용
    @Column(nullable = false)       //not null
    private int mno;              //회원번호 [ 회원번호 -fk ]
    @Column(nullable = false)       // not null
    private int cno;              //카테고리 [ 카테고리-fk ]
    @Column(nullable = false)       //not null
    @ColumnDefault("0")           //JPA insert 할 경우 default
    private int bview;            //조회수
    private String bfile;         //첨부파일
    //작성일 , 수정일 -> 상속( 여러 엔티티해서 사용되는 필드라서 )

    //1.형변환

    public BoardDto toDto(){
        return BoardDto.builder() // 빌더패턴을 이용한 객체생성
                .bno( this.bno)
                .btitle( this.btitle)
                .bcontent( this.bcontent)
                .bview(this.bview)
                .bfile(this.bfile)
                .mno( this.mno)
                .cno( this.cno)
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