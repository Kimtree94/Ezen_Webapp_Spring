// p.281 : 컴포넌트
import React,{useState, useEffect} from "react";
import Toolbar from "./Toolbar";

export default function LandingPage(props){
    // 1. state 선언 : const[변수명, set함수명]=useState(초기값)
    const [isLoggedIn, setISLoggedIn]=useState(true) // 초기값 false 설정

    // 2. 함수
    const onClickLogin=()=>{setISLoggedIn(true);} //로그인 실행
    // 3. 함수
    const OnClickLogout=()=>{setISLoggedIn(false);} // 로그아웃 실행 함수

    // 4. 렌더링
    return(
        <div>
            <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin}  OnClickLogout={OnClickLogout}/> {
            /*이게 어떻게 되는걸까...
            * Toolbar에 props로 전달이 되는거래
            * Toolbar에서 {props.isLoggedIn && <span>환영합니다.</span>} 이렇게 해놓은곳으로 전달된대
            *
            * props는 키 , 값 으로 이루어져있기 때문에 함수전달도 충분히 가능하대
            * */
        }
        </div>
    )
}