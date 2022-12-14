import React from 'react'
import styles from './signup.css'
import axios from 'axios'

function Signup(props){

    //class -> className 변경
    //onclick -> Onclick 변경
    // / 태그닫기

    // 1. setmember 이벤트 함수 정의 [화살표함수 정의]
    const setmember=()=>{
        let info={
            memail : document.querySelector(".memail").value,
            mpassword : document.querySelector(".mpassword").value,
            mphone : document.querySelector(".mphone").value
        }
        console.log(info)

        // 통신 [ajax vs fetch(react 내장)  vs axios(react 별도 설치)]
            // axios 설치방법
            // npm : 라이브러리 빌드 / 관리 [node.js]
            // 1.[현재 프로젝트 내에서] npm install axios
        // axios 비동기통신 함수
            // axios.MethodType("통신URL" , 전송할 data)
            // axios.post()  axios.get(), axios.put()  , axios.delete()
        // 3. axios 비동기통신 이용한 서버[spring] 통신
        axios.post("/member/setmember" , info) // 요청메소드(url, data)
            .then(res=>{ // 응답
                let result=res.data;
                if(result!=0){ // 응답
                    alert("회원가입 성공")
                }else{
                    alert("회원가입 실패");
                }

            })
            .catch(err=>{alert(err)}) // 예외처리

    }
    // 2. 인증코드 요청 함수
    const getauth=()=>{ alert("클릭이벤트")}
    // 3. 타이머함수
    const settimer=()=>{ alert("클릭이벤트")}
    // 4. 인증버튼 확인 함수
    const authcode=()=>{ alert("클릭이벤트")}


    return(

        <div>
            <h3> 회원가입 </h3>
            이메일 : <input type="text" className="memail" />
            <button type="button" onClick={getauth} className="getauthbtn">인증코드발송</button>
            <div className="authbox">
                <input type="text" className="authinput" />
                <button type="button" className="authbtn" onClick={authcode}>인증</button>
                <span className="timerbox"></span>
            </div>
            핸드폰 :<input type="text" className="mphone" /><br/>
            비밀번호 : <input type="text" className="mpassword" /><br/>
            <button type="button" onClick={setmember}>가입하기</button>
        </div>




    );

}

export default Signup;



