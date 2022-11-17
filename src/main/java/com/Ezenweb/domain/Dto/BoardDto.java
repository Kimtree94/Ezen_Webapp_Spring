package com.Ezenweb.domain.Dto;


import com.Ezenweb.domain.entity.BoardEntity;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//룸북 : 생성자,GET/SET,TOString,빌더패턴
@NoArgsConstructor@AllArgsConstructor
@Getter@Setter@ToString@Builder
public class BoardDto {
    private int bno;              //게시물번호
    private String btitle;        //게시물제목
    private String bcontent;      //게시물내용
    private int mno;              //회원번호 [ 회원번호 -fk ]
    private int cno;              //카테고리 [ 카테고리-fk ]
    private int bview;            //조회수
    private String bfile;         //첨부파일


    //1.형변환
    public BoardEntity toEntity(){ // 생성자를 이용한 생성
        return BoardEntity.builder()
                .bno(this.bno)
                .btitle(this.btitle)
                .bcontent(this.bcontent)
                .bview(this.bview)
                .bfile(this.bfile)
                .mno( this.mno)
                .cno(this.cno)
                .build();
    }
}

