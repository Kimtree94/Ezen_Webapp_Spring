package com.Ezenweb.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//p.49
@RestController // 현재클래스를 스프링의 RestController 사용
public class HelloController {
        //컨트롤은 : 클라이언트 [ 사용자 ] 요청 , 응답 수행하는 공간
        // 실제 데이터 처리[가공] 이나 로직 [기능] => DAO 나 서비스에서 실행
        // JSP 는 패키지[폴더] HTTP URL 이 경로가됨  vs Spring 은 무조건 RESTFUL
    @RequestMapping("/hello")
    public String Hello(){return "Hello World";}

}
