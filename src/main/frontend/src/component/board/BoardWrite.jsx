import React , { useState , useEffect,Component } from 'react'
import axios from 'axios'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

let bcno = 0; // 선택한 카테고리 번호 [ 전역변수 ]
let bcontent = ''; // 입력받은 게시물 내용 [ 변수가 수정될경우 재 랜더링을 할 필요가 없기때문에 ]
export default function BoardWrite( props ) {

    const [ category , setCategory ] = useState('');    // 입력받은 카테고리명
    const [ categoryList , setCategoryList ] = useState([]);    // 서버로부터 가져온 카테고리 리스트

    // 1. 모든 카테고리 가져오기 함수 [ 실행조건 : 페이지가 [열렸을때] 렌더링 되었을때 ]
    function getbcategory(){
        axios
            .get("/board/bcategorylist")
            .then( res => { setCategoryList( res.data );  } )
            .catch( err => { console.log( err); } )
    }

    useEffect( getbcategory  ,[ ] ); // 페이지가 mount , unmount

    // 2. 입력된 카테고리 등록 함수 [ 실행조건 : 카테고리 등록 버튼 눌렀을때 ]
    const setbcategory = () => {
        if( category == '' ){ alert("카테고리명을 입력후 등록해주세요"); return; }
        axios
            .post( "/board/setbcategory" ,  { bcname : category } )
            .then( res => {
                if( res.data == true ) { alert("카테고리 성공해부렀으"); getbcategory(); }
                else{ alert("카테고리 '도' 못올리냐");  }
            })
            .catch( err => { console.log( err); } )
    }

    // 3. 입력받은 게시물 등록 함수 [ 실행조건 : 글쓰기 등록 버튼 눌렀을때 ]
    const setboard = () => {
        // 카테고리 선택 유효성 검사
        if( bcno == 0 ){ alert('카테고리를 선택해주세요'); return; }
        // 로그인 여부 검사
        let boardform = document.querySelector('.boardform');
        let formdata = new FormData( boardform );
        formdata.set( "bcno" , bcno );          // 폼데이터의 카테고리 번호 추가
        formdata.set("bcontent",bcontent)

        axios
            .post("/board/setboard" , formdata , { headers: { 'Content-Type': 'multipart/form-data'  } }  )
            .then( res => {
                console.log( res.data )
                if( res.data == true ){ alert('게시물 작성 성공'); }
                else{ alert('게시물 작성 실패'); }
            })
            .catch( err => { console.log( err ); } )
    }

    return (
        <div>
            <h1> 글쓰기 페이지 </h1>
            <input type="text" value = {category} onChange={ (e)=> { setCategory(e.target.value ) }  } />
            <button type="button" onClick={ setbcategory }>카테고리추가</button>
            <div className="bcategorybox">
                {
                    categoryList.map( (c) => {
                        return (
                            <button
                                key = { c.bcno }
                                type="button"
                                onClick={ ()=>{ bcno = c.bcno;   } } >
                                {c.bcname}
                            </button>
                        )
                    })
                }
            </div>

            <form className="boardform">
                제목 : <input type="text" name="btitle" />

                <CKEditor
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();bcontent=data;
                    } }
                />

                첨부파일 : <input type="file" name="bfile" />
                <button type="button" onClick={ setboard } >등록</button>
            </form>
        </div>
    );
}

/*
    1. class => className ,
    2. onclick => onClick ,
    3. <태그> </태그>  , <태그 /> ,
    4. setbcategory() -> { 변수명 }
 */