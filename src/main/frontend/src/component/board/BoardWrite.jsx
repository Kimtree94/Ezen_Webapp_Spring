import React, {useEffect, useState} from "react";
import axios from "axios";


let bcno = 0; // 선택한 카테고리 번호 [ 전역변수 ]

export default function BoardWrite(props) {
    const [category, setCategory] = useState(''); // 입력받은 카테고리명
    const [categoryList, setCategoryList] = useState([]); //서버로부터 가져온 카테고리 리스트


    /*  let options = {
          headers: { 'Content-Type': 'application/json' }
          , url: '/board/bcategorylist'
          , method: 'post'
          , data: JSON.stringify(category)
      }*/
    // 카테고리 가져오기 함수
    const getbcategory = () => {
        axios
            .get("/board/bcategorylist")
            .then(res => {
                setCategoryList(res.data);
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(getbcategory, []); //페이지가 mount , unmount
    //입력된 카테고리 등록 함수
    const setbcategory = () => {
        if (category == null) {
            alert('카테고리명을 넣어임마');
            return;
        }
        axios
            .post("/board/setbcategory", {bcname: category})
            .then(res => {
                if (res.data == true) {
                    alert('카테고리 등록ㅇㅋ')
                    getbcategory()
                } else {
                    alert('카테고리 등록 ㄴㄴ')
                }
            })
            .catch(err => {
                console.log(err);
            })

    }


    const setboard = () => {
       if(bcno==0){alert('카테고리를 선택해임마');return;}

       let boardform = document.querySelector('.boardform');
       let formdata=new FormData(boardform);
       formdata.set("bcno",bcno);
       axios
           .post("/board/setboard",formdata,{headers:{'Content-Type':'mulitipart/form-data'}})
           .then(res=> {
               console.log(res.data);
               if (res.data == true) {
                   alert('게시물 작성 성공');
               } else {
                   alert('실패야');
               }
           })
           .catch(err=>{console.log(err)})
    }


    return (
        <div>
            <h1> 글쓰기 페이지</h1>

            <input type="text" value={category} onChange={(e) => {
                setCategory(e.target.value)
            }}/>

            <button type="button" onClick={setbcategory}>카테고리 추가하기</button>

            <div className="bcategorylistbox">
                {
                    categoryList.map((c) => {
                        return (
                            <button
                                key={c.bcno}
                                type="button"
                                onClick={() => {bcno = c.bcno;alert(bcno)}}>
                                {c.bcname}
                            </button>
                        );
                    })
                }

            </div>
            <form className="boardform">
                제목 : <input type="text" name="btitle"/>
                내용 : <input type="text" name="bcontent"/>
                첨부파일 : <input type="file" name="bfile"/>
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