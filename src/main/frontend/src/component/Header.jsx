import React , {useState} from "react";
import logo from '../img/캡처.JPG'
import Styles from'../css/header.css' // src->css->header.css
import {HashRouter,BrowserRouter , Routes , Route , Link, Router} from 'react-router-dom';
import axios from "axios";  // react 비동기통신

export default function Header(props){

    const[login,setLogin]=useState("");  // 로그인된 회원정보 state 생명주기
    // 1. 서버와 통신 [axios]
    axios.get("/member/getloginMno").then((response)=>{setLogin(response.data);})
        // .get("url")
        // .post("url" , data)
        // .delete("url")
        // .put("url" , data)

        // .then(옵션메소드)
        //. then((응답 객체)=>{응답 실행문})
        // 응답 객체명 : http 응답 객체 반환
        //  응답 데이터 호출 : 객체명.data

    // axios.type('URL').then(res=>{응답})
    return(
        <div className="header">
            <div className="header_logo">
                <Link to="/"><img src={logo} className="logo"/></Link>
            </div>
           <ul className="top_menu">
               {login==="" ?
                   (
                   <>
                       <li><Link to="/member/signup"> 회원가입 </Link></li>
                       <li><Link to="/member/login"> 로그인 </Link></li>
                       <li><Link to="/book/list"> 리액트공부방</Link> </li>
                   </>
                   ):(
                   <>
                       <li>{login}</li>
                       <li><a href="/member/logout"> 로그아웃</a> </li>

                   </>
                   )
               }


               <li><Link to="/board/list"> 자유게시판 </Link></li>

           </ul>
        </div>
    );
}