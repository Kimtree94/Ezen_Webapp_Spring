//1. 컴포넌트 호출
import React, {useState} from "react";
import Styles from '../css/header.css';//sec->css->header.css
import logo from '../img/logo.png';
import {HashRouter, BrowserRouter, Routes, Route, Link, Router} from "react-router-dom";
import axios from 'axios';//react 비동기 통신 라이브러리
//2.
export default function Header(props) {

    const [login, setLogin] = useState(null);
    // 로그인된 회원정보 state 생명주기 주입
    // 변경시 재 랜더링

    axios
        .get("/member/getloginMno")
        .then((response) => {
            setLogin(response.data);
        })


    return (
        <div>
            <div className="header">
                <div className="header_logo">
                    <Link to="/"><img className="logo" src={logo}></img></Link>
                </div>
                <ul className="top_menu">

                    {login == "" ?
                        (
                            <>
                                <li><Link to="/member/signup">회원가입</Link></li>
                                <li><Link to="/member/login">로그인</Link></li>
                            </>
                        )
                        :
                        (
                            <>
                                <li>{login}</li>
                                <li><a href="/member/logout">로그아웃</a></li>
                                <li><Link to="/book/list"> 리액트 공부방 </Link></li>
                            </>
                        )
                    }
                    <li><Link to="/board/list">자유게시판</Link></li>
                </ul>
            </div>
        </div>
    );
}
/*
//1.비동기 통신  [ axios ]
// AJAX , fetch(리액트 내장 라이브러리 , Axios (설치형라이브러리)
//.get( "url" )
//.post( "url" , data )
//.delete( "url" )
//.put( "url" ,data )
//.then( 옵션 메소드 )
//.then ((응답변수명) => {응답 실행문 })
// 응답 변수명 : http 응답 정보 객체 반환
// 응답 데이터 호출 : 객체명.data
//axios : Data type json
*/


//axiox.get ('URL').then( res =>{응답} )

/*
    가상 DOM 작성시 주의점
        1. <태그명></태그명> , <태그명/>

        return(<button type=""></button>)

 */