package com.Ezenweb.domain.Dto;


import com.Ezenweb.domain.entity.board.BoardEntity;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

//룸북 : 생성자,GET/SET,TOString,빌더패턴
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class BoardDto {
    private int bno;              //게시물번호
    private String btitle;        //게시물제목
    private String bcontent;      //게시물내용
    private int bview;            //조회수
    private MultipartFile bfile;         //첨부파일
    // spring : MultipartFile
    // jsp : cos 라이브러리
    private int bcno;
    private String memail;            //아이디

    //1.형변환
    public BoardEntity toEntity() { // 생성자를 이용한 생성
        return BoardEntity.builder()
                .bno(this.bno)
                .btitle(this.btitle)
                .bcontent(this.bcontent)
                .bview(this.bview)
                .build();
    }
}

