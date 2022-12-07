import React from "react";


export default function BoardWrite( props ) {
    const setbcategory = () => {
        alert('카테고리 추가됩니다.')
    }
    const setboard = () => {
        alert('카테고리 추가됩니다.')
    }

    return (
        <div>
            <h1> 글쓰기 페이지</h1>
            <input type="text" className="bcname" placeholder="카테고리추가"></input>
            <button type="button" onClick={setbcategory}>추가하기</button>
            <br/>
            <div className="bcategorylistbox"></div>

            <form className="boardform">
                제목 : <input type="text" name="btitle" />
                내용 : <input type="text" name="bcontent" />
                첨부파일 : <input type="file" name="bfile" />
                <button type="button" onClick={setboard}>등록</button>
            </form>
        </div>

    );
}

/*
 HTML을 리액트화 시킬때
 1. class -> className
 2. onclick = >onClick
 3.<태그></태그> ,<태그 />
 4.setbcategory() -> { 변수명 }
*/