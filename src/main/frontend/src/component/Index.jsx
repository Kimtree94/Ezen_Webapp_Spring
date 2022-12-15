
// jsx : 리액트 확장 표현식 파일
// 컴포넌트 단위 애플리케이션 제작


// 컴포넌트 만들기 준비물
    // 1. 첫글자는 대문자 [ 컴포넌트명 == 파일명 ]
    // 2. 리액트는 프레임워크 아님! 라이브러리 집합소! 그래서 import가 많음
        // 1.import React from "react"
        // 2. 컴포넌틑 정의
        // 3. export default 컴포넌트명
/*
한번에 요렇게도 가능함
export default function Index(){
    return (렌더링할 코드);
}
 */

// JSX 주석처리 // {*/}


import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Signup from "./member/Signup";
import Home from './Home'
import Login from './member/Login'
import List from "./board/Boardlist";
import BoardWrite from "./board/BoardWrite";
import BookList from "../Book/BookList";
import Library from "../Book/chapter3/Library";
import Clock from "../Book/chapter4/Clock";
import CommentList from '../Book/chapter5/CommentList'
import NotificationList from "../Book/chapter6/NotificationList";
import Counter from '../Book/chapter7/Ex1_Hook'
import Accommodate from "../Book/chapter7/Accommodate";
import TestState from "../Book/chapter8/TestState";
import ConfirmButton from "../Book/chapter8/ConfirmButton";
import ConfirmButton2 from "../Book/chapter8/ConfirmButton2";
import LandingPage from "../Book/chapter9/LandingPage";
import AttendanceBook from "../Book/chapter10/AttendanceBook";
import NameForm from "../Book/chapter11/Ex1_Form";
import SignUp from "../Book/chapter11/SignUp";
import BoardView from "./board/BoardView"
import BoardUpdate from "./board/BoardUpdate";
import Chatting from "./chatting/Chatting";
// 라우터 설치
// import {컴포넌트명} from 'react-router-dom' : V6
import {HashRouter,BrowserRouter , Routes , Route , Link, Router} from 'react-router-dom';

export default function Index(props){
    return (
        <div className="webbox">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/member/signup" element={<Signup/>} /> {/*회원가입 페이지를 부르는 루트*/}
                    <Route path="/member/login" element={<Login/>} />
                    <Route path="/board/list" element={<List/>} />
                    <Route path="/board/write" element={<BoardWrite/>} />
                    <Route path="/chatting" element={<Chatting/>} />

                    <Route path="/board/view/:bno" element={<BoardView/>} />
                    <Route path="/board/update/:bno" element={<BoardUpdate/>} />
                    <Route path="/book/list" element={<BookList/>} />
                    <Route path="/book/chapter3" element={<Library/>} />
                    <Route path="/book/chapter4" element={<Clock/>} />
                    <Route path="/book/chapter5" element={<CommentList/>} />
                    <Route path="/book/chapter6" element={<NotificationList/>} />
                    <Route path="/book/chapter7" element={<Accommodate/>} />
                    <Route path="/book/chapter8" element={<TestState/>} />
                    <Route path="/book/chapter9" element={<LandingPage/>} />
                    <Route path="/book/chapter10" element={<AttendanceBook/>} />
                    <Route path="/book/chapter10/NameForm" element={<NameForm/>} />
                    <Route path="/book/chapter10/SignUp" element={<SignUp/>} />
                </Routes>
                <Footer/>

            </BrowserRouter>
        </div>
    );
}


