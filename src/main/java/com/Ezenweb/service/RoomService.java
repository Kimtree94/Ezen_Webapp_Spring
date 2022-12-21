package com.Ezenweb.service;

import com.Ezenweb.domain.Dto.RoomDto;
import com.Ezenweb.domain.entity.member.MemberEntity;
import com.Ezenweb.domain.entity.member.MemberRepository;
import com.Ezenweb.domain.entity.room.RoomEntity;
import com.Ezenweb.domain.entity.room.RoomImgEntity;
import com.Ezenweb.domain.entity.room.RoomImgRepository;
import com.Ezenweb.domain.entity.room.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class RoomService {


    @Autowired
    private MemberService memberService;
    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private RoomRepository roomRepository;
    @Autowired
    private RoomImgRepository roomImgRepository;

    @Transactional
    public boolean write(RoomDto roomDto) {

        //1. 등록한 유저 [ 로그인한 유저 ]
        String loginMemail = memberService.getloginMno();
        if (loginMemail == null) {
            return false;
        }
        MemberEntity memberEntity = memberRepository.findByMemail(loginMemail).get();
        //2.룸 등록[pk]
        //1. 룸 저장 [ save ( 엔티티 ) ] 반환타입 [ 저장된 매핑 레코드 ]
        RoomEntity roomEntity = roomRepository.save(roomDto.toEntity()); // 반환타입을 엔티티로 받는다
        if (roomEntity.getRno() < 1) {
            return false;
        }
        //2. 룸에 회원 엔티티 대입   [ 양방향 ]//3. 회원엔티티에 룸을 대입   [ 양방향 ]
        roomEntity.setMemberEntity(memberEntity);
        memberEntity.getRoomEntityList().add(roomEntity);
        //3. 사진등록 저장
        roomDto.getRimg().forEach((i) -> { // 첨부파일이 여러게 존재하므로 반복문을 돌리며 꺼내준다
            if (!i.getOriginalFilename().equals("")) {//실제 첨부파일의 파일명이 존재할경우}
                RoomImgEntity roomImgEntity =
                        roomImgRepository.save(RoomImgEntity.builder().rimg(i.getOriginalFilename()).build());//필드가 적을때는 굳이 DTO가 필요없음
                //4. 룸에 사진 엔티티 대입   [ 양방향  //5. 사진엔티티에는 룸을 대입 [ 양방향 ]
                roomEntity.getRoomImgEntityList().add(roomImgEntity);
                roomImgEntity.setRoomEntity(roomEntity);
            }
        });
        return true;
    }

    //2.룸 출력
    public List<RoomDto> getroomlist() {
        //1. 모든 룸 엔티티 꺼내기
        List<RoomEntity> roomEntityList = roomRepository.findAll();  // 매핑된 엔티티들
        List<RoomDto> roomDtoList = new ArrayList<>();              // 출력용 DTO
        //2.형변환
        roomEntityList.forEach((e) -> {
            roomDtoList.add(e.toDto());
        });
        return roomDtoList;
    }
}
