package com.Ezenweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication/*클래스가 실행될때 스프링의 기본셋팅값을 다 잡는다*/
//스프링 웹 기본설명 [ 1. MVC , 2.내장서버 , 3. RESTFUL , 4. 웹 설정  ]
//스프링 웹을 위한 기본 셋팅 어노테이션
public class Webstart {

    public static void main(String[] args) {//main 스레드

        SpringApplication.run(Webstart.class);//스프링 어플리케이션실행 현재클래스명.class
    }
}


/*
    1.extend : 상속 [ 설계도를 물려받는다 . 즉 메모리를 물려받는다  * 1개만 가능!!]
    2.@ : 어노테이션 또는 메타데이터라고 호칭함 [빌드[실행] 할때 자동적으로 코드가 실행된다. / 여러개가 가능함 ]
        2-1. 내장 : @override : 상속받은 메소드를 재정의 할때
        2-2. 메타 :
 */