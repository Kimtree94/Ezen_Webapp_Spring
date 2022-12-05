//1. 컴포넌트 호출
import React from "react";
import Styles from '../css/header.css';//sec->css->header.css
import logo from '../img/logo.png';
import {HashRouter, BrowserRouter, Routes, Route, Link, Router} from "react-router-dom";
import axios from 'axios';//react 비동기 통신 라이브러리
//2.
export default function Header(props) {
    //1.서버와 통신 [ axios ]

    axios.get('http://localhost:8080/member/getlogin').then(res =>{alert("서버와 통신됨")})
    //axiox.get ('URL').then( res =>{응답} )
    return (
        <div >
            <div className="header">
                <div className="header_logo">
                    <Link to="/"><img className="logo" src={logo}></img></Link>
                </div>
                <ul className="top_menu">
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/member/signup">회원가입</Link></li>
                    <li><Link to="/member/login">로그인</Link></li>
                    <li><a href="/member/logout">로그아웃</a></li>
                    <li><a href="/board/list">자유게시판</a></li>
                </ul>
            </div>
        </div>
    );
}