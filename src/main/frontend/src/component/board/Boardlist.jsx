import React, {useEffect, useState} from "react";
import axios from "axios";
import Pagination from 'react-js-pagination'
import {HashRouter,BrowserRouter , Routes , Route , Link, Router} from 'react-router-dom';
export default function Boardlist(props){

    // 메모리
    const [pageInfo, setpageInfo]=useState( {bcno : 0 , page : 1 , key : "" , keyword : ""}); // 요청 정보 객체 state
    const [pageDto, setpageDto]=useState( {list : []}); // 게시물 리스트 state
    const[bcategory, setBcategoryList]=useState([])
    // [] : array/list , {} : object/dto
    // 서버로부터 게시물 리스트를 가져오는 함수 [실행조건 1. 렌더링될때 2. 검색할때 3. 카테고리선택 4. 페이징 선택]
    // server : pageInfo 요청 =>pageDto 응답
    const getboardlist=()=>{
        axios.post("/board/boardlist" , pageInfo)
            .then(res=>{
                console.log(res.data);
                setpageDto(res.data);

            })
            .catch(err=>{console.log(err)})
    }
    // 렌더링될때 , 그리고 pageInfo가 변경될때마다 실행됨!!
    useEffect(getboardlist, [pageInfo])

    // 모든 카테고리 가져올떄
    const getCategory=()=>{ // 실행조건 mount될 때
        axios.get("/board/bcategorylist")
            .then(res=>{setBcategoryList(res.data);}).catch(err=>{console.log(err)})
    }
    useEffect(getCategory, [])

    // 카테고리 버튼 선택했을때
    const onCategory=(bcno)=>{setpageInfo({bcno : bcno , page : 1 , key : "" , keyword : ""})}

    // 페이징 이벤트
    const onPage=(page)=>{setpageInfo({bcno : pageInfo.bcno , page : page , key : pageInfo.key , keyword : pageInfo.keyword })}

    // 검색
    const onSearch=()=>{
        setpageInfo(
            {
                bcno : pageInfo.bcno ,  // 카테고리 번호
                page : 1 ,              // 검색시 첫페이지부터 보여주기
                key : document.querySelector(".key").value, // 검색한 필드명
                keyword : document.querySelector(".keyword").value // 검색한 단어
            }
        )
    }

    //
    const loadView=(bno)=>{
        window.location.href="/board/view/"+bno;
    }


    return(
        <div className="listpage">

            <h3>글 목록 페이지</h3>
            <a href="/board/write">글쓰기</a>
            <div className="bcategorybox">
                <button type="button" onClick={()=>onCategory(0)}>전체보기</button>
                {
                    bcategory.map((c) => {
                        return (
                            <button type="button" onClick={()=>onCategory(c.bcno)}>{c.bcname}</button>
                        );
                    })
                }

            </div>

            <table className="btable">
                {
                    pageDto.list.map((b)=>{
                        return(
                          <tr>
                              <td>{b.bno}</td>
                              <td onClick={()=>loadView(b.bno)}>{b.btitle}</td>
                              <td>{b.memail}</td>
                              <td>{b.bdate}</td>
                              <td>{b.bview}</td>
                          </tr>
                        );
                    })
                }

            </table>
            <Pagination
                activePage={pageInfo.page}
                itemsCountPerPage={3}
                totalItemsCount={pageDto.totalBoards}
                pageRangeDisplayed={5}
                onChange={onPage}
            />

            <div className="searchBox">
                <select className="key">
                    <option value="btitle">제목</option>
                    <option value="bcontent">내용</option>
                </select>
                <input type="text" className="keyword" />
                <button type="button" onClick={onSearch}>검색</button>
            </div>


        </div>
    )
}