

function setmember(){
    //DB DTO JS에서 쓰는 필드는 동일화 하는게 좋다 .
    //보내고자하는 필드명과 매핑하고자 하는 DTO의 필드명은 동일해야한다 .
    let info = {
    memail:document.querySelector('.memail').value,
    mpassword : document.querySelector('.mpassword').value,
    mphone : document.querySelector('.mphone').value
    }
    let timerbox=document.querySelector('.timerbox').innerHTML
    console.log("위::"+timerbox)
    if(timerbox!="인증성공"){alert('이메일 인증부터 해주세요');return;}

    $.ajax({
    url:"/member/setmember",
    type:"post",
    data:JSON.stringify(info),
    contentType:"application/json",
    success:function(re){alert(re);}
    })
}
let auth=null; // 발급된 인증코드
let timer = 0; // 인증 시간
let timerinter = null;//4. 타이머 함수
function getauth(){
    //1.입력받은 이메일
    let toemail=document.querySelector('.memail').value
    //2.입력받은 이메일에게 인증코드를 전송하고 전송된 인증코드를 반환
    $.ajax({
    url:"/member/getauth",
    data:{"toemail":toemail},
    type:"get",
    success:function(re){
        auth = re //응답받은 인증코드를 전역변수에 대입
        alert('해당 이메일로 인증코드 발송')
        document.querySelector('.getauthbtn').innerHTML ="인증코드재요청";
        timer = 120//초 단위
        settimer()//타이머 함수 실행
        }
    })
}

 function settimer(){
        //1.setInterval(function(){},밀리초); //일정 시간간격으로 마다 함수 실행
        //2.clearInterval(객체명) // Inteval 종료
        timerinter = setInterval(function(){
              let minutes,seconds ;
               minutes = parseInt(timer / 60); //분
               seconds = parseInt(timer % 60); //초
                //삼항연산자 : 조건 ? 참 : 거짓
                  minutes= minutes<10 ? "0"+minutes :minutes; //만약에 3분이면 03
                  seconds= seconds<10 ? "0"+seconds :seconds;
               let timehtml = minutes+" : "+seconds; // 시 : 분 html 구성
               document.querySelector('.timerbox').innerHTML=timehtml;
            //종료조건
            timer--; //1초씩 차감
            if(timer<0){ // 시간이 0초가 되면
             clearInterval(timerinter);
             alert('인증 실패')
             auth=null; // 발금인증코드 초기화
             document.querySelector('.getauthbtn').innerHTML="인증코드 재요청" //버튼의 입력된 문자변경
            }
        },1000);
 }
//3.인증코드 확인 이벤트
function authcode(){
     let authinput=document.querySelector('.authinput').value//입력받은 인증코드
     if(authinput==auth){//입력받은 인증코드와 발급코드가 일치하면
          alert('인증성공')
          clearInterval(timerinter);
          auth=null; timer=0;
          document.querySelector('.timerbox').innerHTML='인증성공';
          console.log(document.querySelector('.timerbox').innerHTML)
     }else{
         alert('인증 실패')
     }
}