package com.Ezenweb.service;


import com.Ezenweb.domain.Dao.BoardDao;
import com.Ezenweb.domain.Dto.BoardDto;
import com.Ezenweb.domain.entity.BoardEntity;
import com.Ezenweb.domain.entity.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service // 컴포넌트 [ Spring MVC ]
public class BoardService {
    //-------------------1.전역변수----------------------//
    @Autowired
    private BoardRepository boardRepository;
        //@Transactional : 엔티티에 DML을 적용 할때 사용되는 어노테이션

    //-------------------2.서비스----------------------//
    //게시물 쓰기
    @Transactional
    public boolean setboard(BoardDto boardDto){
        //1.dto ---> entity[ insert into ] 반환값 = 저장된 entity
       BoardEntity entity = boardRepository.save(boardDto.toEntity());
        //2.생성된 entity의 게시물 번호가 0이 아니면 성공
        if(entity.getMno()!=0){return true;}
        else{return false;}//0이면 실패
    }
    //게시물 목록조회
    @Transactional
    public List<BoardDto> boardlist(){
        //1. 모든 엔티티 호출한다
        List<BoardEntity> elist = boardRepository.findAll();
        //2.컨트롤에게 전달할때 형변환 [entity ->dto ] : 역할이 달라서
        List<BoardDto> dlist =new ArrayList<>();
        //3. 변환
        for(BoardEntity entity : elist) {
            dlist.add(entity.toDto());
        }
        //4.변환된 리스트 dlist 반환
        return dlist;
}
    //3.게시물 개별조회
    @Transactional
    public BoardDto getboard(int bno){
        //1. 입력받은 게시물번호로 엔티티 검색 [ optional ]
       Optional<BoardEntity> optional = boardRepository.findById(bno);//1.입력받은 게시물번호로 엔티티검색
        //2. Optional 안에 있는 내용물 확인
        if(optional.isPresent()){// optional 안에 있는 내용물 확인 .isPresent()
            //3.엔티티 꺼내기 get();
            BoardEntity boardEntity = optional.get();//엔티티꺼내기
            return boardEntity.toDto();//형변환 반환
        }else{return null;}
    }
    //게시물 삭제
    @Transactional
    public boolean delboard(int bno){
        Optional<BoardEntity> optional=boardRepository.findById(bno);
        if(optional.isPresent()){
            BoardEntity entity = optional.get();
            boardRepository.delete(entity);
            return true;
        }else{return false;}
    }
    //업데이트 게시판
    @Transactional
    public boolean upboard(BoardDto boardDto){
        //1. DTO에서 수정할 PK번호 이용한 엔티티 찾기
        Optional<BoardEntity> optional = boardRepository.findById(boardDto.getBno());
        //2.
        if(optional.isPresent()){
            BoardEntity entity = optional.get();
            //수정처리 [ 메소드 별도 존재x / 엔티티 객체<---매핑--->레코드 / 엔티티 객체 필드를 수정:@Transactional ]
            entity.setBtitle(boardDto.getBtitle());
            entity.setBcontent(boardDto.getBcontent());
            entity.setBfile(boardDto.getBtitle());
            return true;
        }else{return false;}
    }
}
