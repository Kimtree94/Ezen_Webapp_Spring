import React from "react";
import {HashRouter, BrowserRouter, Routes, Route, Link, Router
    ,useParams} from "react-router-dom";
// useParams 라우터 경로상의 매개변수 호출 훅 [ 쿼리스트링 형식 ]
export default function BoardView(props){
    const params = useParams();
    return(
        <div>
            뷰 페이지로 들어옴 페이지 번호 : {params.bno}
        </div>
    );
}