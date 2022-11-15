package com.Ezenweb.controller.test;

import com.Ezenweb.domain.Dto.MemberDto;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController // @RestController 을쓰면 @ResponseBody 를 생략할수있다 . ->ResponseBody
@RequestMapping("/api/v1/put-api")
public class PutController {
    //1. p.70
    @PutMapping("member")
    public String putMember(@RequestBody Map< String, String > putData) {
        return putData.toString();
    }

    //2-1. p.71  반환타입 : 문자열 [ String ]
    @PutMapping("/member1")
    public String postMemberDto(@RequestBody MemberDto memberDto) {
    return memberDto.toString();
    }
    //2-2 p.72   반환타입 : DTO [MemberDto]
    @PutMapping("/member2") //@RestController 이없다면 @ResponseBody를 적어주어야한다.
    public MemberDto psotMemberDto2(@RequestBody MemberDto memberDto){
        return memberDto;
    }
}
