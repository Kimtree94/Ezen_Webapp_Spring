package com.Ezenweb.controller;

import com.Ezenweb.domain.Dto.RoomDto;
import com.Ezenweb.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/room")
public class RoomController {
    // 빈 : 스프링이 관리하는 메모리
        // 기본 5계층 [ Controller , Service , Repository ,Entity , Configuration 등 ]
        // 어노테이션 명시하면 스프링 실행시 빈에 등록
    //@Autowired : 스프링 빈에 등록된 클래스만 가능
    @Autowired
    private RoomService roomService;


    //주의: 라우터에 있는 path의 매핑이 같으면 오류 발생
    @PostMapping("/setroom")
    public boolean write(RoomDto roomDto) {
        return roomService.write(roomDto);
    }

    @GetMapping("/getroomlist")
    public List<RoomDto> getroomlist(){return  roomService.getroomlist();}
}
