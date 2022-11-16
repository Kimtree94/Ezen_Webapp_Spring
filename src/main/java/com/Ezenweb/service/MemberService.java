package com.Ezenweb.service;

import com.Ezenweb.domain.Dto.MemberDto;
import com.Ezenweb.domain.entity.MemberEntity;
import com.Ezenweb.domain.entity.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMailMessage;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;


@Service // 해당 클래스가 Service 임을 명시
public class MemberService {

    // --------------------------------전역객체-----------------------------------///
    @Autowired
    private MemberRepository memberRepository; //리포지토리 객체
    @Autowired//스프링 컨테이너 [ 메모리 ] 위임
    private HttpServletRequest request; // 요청객체 직접 생성해야함
    // 메일전송 객체
    @Autowired
    private JavaMailSender javaMailSender;  // 메일전송 객체

    // --------------------------------서비스 메소드-----------------------------------///
    @Transactional
    public int setmember(MemberDto memberDto) {
        MemberEntity entity = memberRepository.save(memberDto.toEntity());
        //memberRepository.save(엔티티) : 해당 엔티티를 insert
        //.find = select
        //.delete = delete
        //.save = insert // 생성된 엔티티를 반환
        //2.  결과 반환 [ 생성된 엔티티의 pk값 반환 ]
        return entity.getMno();
    }

    //2.로그인
    @Transactional
    public int getmember(MemberDto memberDto) {
        //1.Dao처리 [ select ]
        //1.모든 엔티티 호출
        List<MemberEntity> entityList = memberRepository.findAll();
        //.findAll = select < List > // select * from member와 같다
        //2. 입력받은 데이터와 일치값 찾기
        for (MemberEntity entity : entityList) { // 리스트 반복
            if (entity.getMemail().equals(memberDto.getMemail())) { // 인티티 = 레코드 의 이메일과 입력받은 이메일과 비교
                if (entity.getMpassword().equals(memberDto.getMpassword())) {
                    //세션 부여 [ 로그인 성공시 'loginMno'라는 이름으로 회원이메일을 세션에 저장]
                    request.getSession().setAttribute("loginMno", entity.getMno());//로그인 성공한 아이디
                    return 1;//로그인 성공했다
                } else {
                    return 2; //패스워드 틀림
                }
            }
        }
        return 0;//아이디가 틀림
    }

    //3.비밀번호 찾기
    @Transactional
    public String getpassword(String memail) {
        //1.모든 레코드 /엔티티 꺼내온다
        List<MemberEntity> entityList = memberRepository.findAll();
        //2.리스트에 찾기
        for (MemberEntity entity : entityList) {
            if (entity.getMemail().equals(memail)) {
                return entity.getMpassword();
            }
        }
        return null;
    }

    @Transactional
    public int setdelete(String mpassword) {
        //1.로그인된 회원의 엔티티가 필요~~
        //1.세션 호출
        Object object = request.getSession().getAttribute("loginMno");
        System.out.println("세션확인1//" + object.toString());
        //2. 세션확인 [ 만약에 세션이 null이면 반환 o]
        if (object != null) {
            int mno = (Integer) object; // 형변환 [object--->int]
            System.out.println("세션확인2//" + mno);
            //3.세션에 있는 회원번호[PK]로 리포지토리에서 찾기 [findById : select * from member where mno=?]
            Optional<MemberEntity> optional = memberRepository.findById(mno);
            if (optional.isPresent()) {//깡통확인하는것
                System.out.println("세션확인2//" + optional.toString());
                // OPtional 클래스  : null 관련 메소드 제공
                //4.Optional 객체에서 엔티티 빼오기
                MemberEntity entity = optional.get();
                //5.탈퇴 [ delete : delete from member where mno=? ]
                memberRepository.delete(entity);
                //6. 세션 삭제
                request.getSession().setAttribute("loginMno", null);
                return 1;
            }
        }
        return 0;
    }

    //5.회원수정
    @Transactional //데이터 수정[update]
    public int setupdate(String mpassword) {
        //1.세션 호출
        Object object = request.getSession().getAttribute("loginMno");
        //2. 세션존재여부 판단
        if (object != null) {
            int mno = (Integer) object;
            //3.pk값을 가지고 엔티티 [레코드] 검색
            Optional<MemberEntity> optional = memberRepository.findById(mno);
            //4. 검색된 결과 여부 판단
            if (optional.isPresent()) {
                MemberEntity entity = optional.get();
                entity.setMpassword(mpassword);
                return 1;
            }
        }
        return 0;
    }

    //6. 로그인 여부 판단 메소드
    public int getloginMno() {
        //1.세션 호출
        Object object = request.getSession().getAttribute("loginMno");
        //2. 세션 여부 판단
        if (object != null) {
            return (Integer) object;
        } else {
            return 0;
        }
    }

    public int logout(){
        Object object = request.getSession().getAttribute("loginMno");
        if(object!=null){
            request.getSession().setAttribute("loginMno",null);
            return 1;
        }
        return 0;
    }


    // 8. 회원목록 서비스
    public List<MemberDto> list(){
        // 1. JPA 이용한 모든 엔티티 호출
        List<MemberEntity> list = memberRepository.findAll();
        // 2. 엔티티 --> DTO
        // Dto list 선언
        List<MemberDto> dtoList = new ArrayList<>();
        for( MemberEntity entity : list ){
            dtoList.add( entity.toDto() ); // 형변환
        }
        return dtoList;
    }
    // 9. 인증코드 발송
    public String getauth(String toemail){
        String auth = ""; //인증코드
        String html="<html><body><h1>Ezenweb 회원가입 이메일 인증코드 입니다 </h1>";

        Random random = new Random(); // 1. 난수객체
        for(int i=0; i<6;i++){          //2. 6 회전
            char randchar =(char)(random.nextInt(26)+97);//97~122 영소문자
           // char randchar = random.nextInt(10)+48;//48~57   0~9의 숫자
            auth+=randchar;
        }


        html+="<div>인증코드 :"+auth+"</div>";
        html+="</body></html>";
        meailsend(toemail,"Ezenweb 인증코드",html); // 메일전송
        System.out.println("sdsdsdsd"+auth);
        return auth; // 인증코드 반환

    }


    //메일 전송 서비스
    public void meailsend(String toemail , String title , String content){
        try{


        //1.MIME 프로토콜 객체 생성
        MimeMessage message = javaMailSender.createMimeMessage();
        //2. MimeMessageHelper 설정 객체 생성  new MimeMessageHelper(mime객체명 , 첨부파일여부 , 인코딩타입);
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(message , true , "utf-8");
        //3.보내는사람 정보
        mimeMessageHelper.setFrom("mz1693@naver.com" , "Ezenweb");
        //4.받는사람
        mimeMessageHelper.setTo(toemail); // 받는사람 이메일
        //5.메일의 제목
        mimeMessageHelper.setSubject(title); // 제목
        //6.메일의 내용
        mimeMessageHelper.setText(content.toString(),true); // HTML형식 지원
        //7.메일전송
        javaMailSender.send(message);
        }catch (Exception e){System.out.println("메일전송실패 :"+e);}

    }


}
/*
    메일전송 '
            1. 라이브러리  implementation 'org.springframework.boot:spring-boot-starter-mail'
            2. 보내는사람 이메일 정보 [ application.propertits ] GIT에 올리면 안됨!!유출됨!!
                    네이버기준
                            1. 네이버로그인 -> 메일 - > 환경설정
                            2. POP3/IMAP 설정 -> 사용함
                            3. host , port 등 정보 작성

*/