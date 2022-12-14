import React, {useEffect, useState} from "react";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useParams} from "react-router-dom";

let bcontent='';
export default function BoardUpdate(props){

    const params=useParams();
    const [board, setBoard]=useState({});   // 게시물 메모리

    useEffect( // 1. 서버로부터 해당 게시물번호의 게시물정보 -> useState[board]요청
        ()=>axios.get("/board/getboard", {params:{bno : params.bno } })
            .then(res=>{setBoard(res.data); console.log(res.data.memail)})
        , [])

    // 수정등록처리
    const upboard=()=>{
        // 수정할 게시물번호, 수정할 내용들 [제목 ,내용 , 첨부파일]

        let boardform=document.querySelector(".boardform");
        let formdata= new FormData(boardform);

        // 수정할 게시물번호
        formdata.set("bno" , board.bno); // 수정할 게시물 번호
        formdata.set("bcontent" , bcontent); // 수정할 게시물 내용

        axios.put("/board/upboard", formdata , { headers: { 'Content-Type': 'multipart/form-data' } } )
            .then(res=>{
                console.log(res.data);
                if(res.data==true){
                    alert("게시물 수정 성공");
                }else{alert("게시물 수정 실패")}
            })
            .catch(err=>{console.log(err)})
    }



    return(
        <div>
            <h3> 수정 페이지</h3>
            <form className="boardform">
                제목 : <input type="text" name="btitle" defaultValue={board.btitle}/>
                <CKEditor
                    editor={ ClassicEditor }
                    data={board.bcontent}
                    onChange={ ( event, editor ) => { const data = editor.getData(); bcontent = data  } }
                />

                첨부파일 : <input type="file" name="bfile"/>

                <button type="button" onClick={upboard}>등록</button>
            </form>

        </div>
    );
}