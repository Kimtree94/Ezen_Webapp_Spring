package com.Ezenweb.controller.test;

import com.Ezenweb.domain.Dto.MemberDto;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

//p.56
@RestController
@RequestMapping("api/v1/get-api")// 요청 URL 정의하기
public class GetController {//클래스와 어노테이션 사이에 공백이 없어야한다 .
    // https://localhost:8080/api/v1/get-api 요청시 해당 클래스 접근[호출/요청] 클래스 주소
        // https://localhost:8080/api/v1/get-api/hello 해당 클래스내 메소드 호출
    //1.p.57
    @RequestMapping(value = "/hello",method = RequestMethod.GET) //get 요청
    public String getHello(){// 함수명은 상관없고 중복이 있으면 안됨
        return "해당 메소드로 들어왔습니다.";//response 응답
    }
        //@RequestMapping : 뒤에 방식을 적어야한다. method = RequestMethod.GET
             //1.GetMapping
                    //@ RequestMapping(value = "/hello",method= RequestMethod.GET)
                    //@ GetMapping("/hello")
            //2.PostMapping
            //3.PutMapping
            //4.DeleteMapping
            //5.PatchMapping
            //6.OptionsMapping
            //7.HeadMapping
            //8.TraceMapping
            //9.ConnectMapping.

    // 2.p.58 @GetMapping
    @GetMapping("/name")
    public  String getName() {
        return "Flature";
    }

    //3.p.59
    //  주의 : @GetMapping 경로상의 변수명 [{variable}] 과 @PathVariable 매개변수 [ variable ]
    @GetMapping("/variable1/{variable}") // 경로상의 변수 [ 값 ]
    public String getVariable1(@PathVariable String variable) {
        return variable;
    }

    //4.p.60
    @GetMapping("/variable2/{variable}")
    public  String getVariable2(@PathVariable(value = "variable")String test){
        return test;
    }
    //[변수1개]
    //@PathVariable : http://localhost:8080/api/v1/get-api/variable2/하하하
    //VS
    //[ 변수 여러개 => 키:값 ]
    //@REquestParam :http://localhost:8080/api/v1/get-api/variable3?variable=하하하

    //4-2 [비교]
    @GetMapping("/variable3")
    public  String getVariable3(@RequestParam  String variable){
        return variable;
    }

    //@PathVariable VS @REquestParam

    //5.p.61
    @GetMapping("/requst1")//?변수명=값&변수명2=값2&변수명3=값3 < 띄어쓰기 하면 안됨>
    public String getRequstParam1(@RequestParam String name,@RequestParam String email,@RequestParam String organization){
        return name+" "+email+" "+organization;
        //http://localhost:8080/api/v1/get-api/requst1?name=qwe&email=qwe@qwe&organization=qweqweqwe
    }

    //6.p.62
    @GetMapping(value="/requst2")
    public String getRequstParam2(@RequestParam Map<String,String> param){
        StringBuilder sb=new StringBuilder();
        param.entrySet().forEach(map->{
            sb.append(map.getKey()+":"+map.getValue()+"\n");
        });
        return sb.toString();
    }
    /*
        java 컬렉션 프레임워크
            1. list : 인덱스[중복가능] ,set .////:인덱스x[중복불가능] ,map:인덱스x[키:값] 엔트리 사용
        js
            1.JSON
    */

    //7.p.66 //http://localhost:8080/api/v1/get-api/requst3?name=qwe&email=qwe@qwe&organization=qweqweqwe
    @GetMapping("/requst3")
    public  String getRequstParam3(MemberDto memberDto){
        return memberDto.toString();
    }

}
