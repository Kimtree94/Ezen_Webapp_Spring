package com.Ezenweb.controller;

import com.Ezenweb.domain.Dto.MemberDto;
import com.Ezenweb.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController //해당 클래스가  RestController 임을 명시
@RequestMapping("member") // 공통 URL 매핑주소
public class MemberController {
    //----------------------------------------전역 객체---------------------------------------------------//
    @Autowired // 제어역전 [ DI ] 스프링 컨테이너 위임 스프링 컨테이너 빈 생성 [ 외부에 메모리 위임 ]
    private MemberService memberService;
    //----------------------------------------HTML반환 매핑---------------------------------------------------//
    @GetMapping("/signup")
    public Resource getsignup() {
        return new ClassPathResource("templates/member/signup.html");//프로젝트내 resource ->templates->member->signup.html반환
    }
    @GetMapping("/login")
    public Resource getlogin() {
        return new ClassPathResource("templates/member/login.html");//프로젝트내 resource ->templates->member->login.html반환
    }
    @GetMapping("/findpassword")
    public Resource getfindpassword() {
        return new ClassPathResource("templates/member/findpassword.html");//프로젝트내 resource ->templates->member->findpassword.html반환
    }
    @GetMapping("/delete")
    public Resource getdelete() {
        return new ClassPathResource("templates/member/delete.html");
    }
    @GetMapping("/update")
    public Resource getupdate() {return new ClassPathResource("templates/member/update.html");}



    //----------------------------------------서비스 매핑---------------------------------------------------//
    @PostMapping("/setmember")//restful api 회원가입
    public int setmember(@RequestBody MemberDto memberDto) {
        //2.서비스 메소드 호출
        int result = memberService.setmember(memberDto);
        //3.응답
        return result;
    }
    @PostMapping("/getmember")//restful api 로그인
    public int getmember(@RequestBody MemberDto memberDto){
        int result = memberService.getmember(memberDto);
        return result;
    }
    @GetMapping("/getpassword")//pw찾기
    public String getpassword(@RequestParam String memail){
        String result = memberService.getpassword(memail);
        return result;
    }
    @DeleteMapping("/setdelete")//회원탈퇴
    public  int setdelete(@RequestParam String mpassword){
        int result = memberService.setdelete(mpassword);
        return result;
    }

    @PutMapping("/setupdate")//회원수정
    public int setupdate(@RequestParam String mpassword){
        int result = memberService.setupdate(mpassword);
        return result;
    }

    @GetMapping("/getloginMno")
    public int getloginMno(){
        int result = memberService.getloginMno();
        return result;
    }
    @GetMapping("/logout")
    public int logout() {
        int result = memberService.logout();
        return result;
    }
    @GetMapping("/list") // 8. 회원목록
    public List<MemberDto> list() {
    List<MemberDto> list =memberService.list();
    return list;
    }

    @GetMapping("/getauth")//@RequestParam("toemail") String toemail
    public String getauth(){
        //return memberService.getauth(toemail);
        return "445544";
    }
}
