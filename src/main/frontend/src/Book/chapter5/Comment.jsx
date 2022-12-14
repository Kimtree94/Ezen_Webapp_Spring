//컴포넌트 만들기
// 1. 컴포넌트 이름은 첫글자가 대문자 시작
    // 파일명과 컴포넌트 이름 동일하게

// 2. 컴포넌트 만들기 준비
    // 1. 상단 react 라이브러리 import 필수
    // 2. 하단 export default Comment 필수

// 컴포넌트 = 함수
    // 1. 입력 : props[매개변수 = 속성객체]
    // 2. 출력 : return [엘리먼트 = 가상 DOM]


import React from 'react' // 필수

// * css 파일 import 하기
import styles from './Comment.css'

function Comment(props){

    //
    return(
        <div className="wrapper">
            <div className="imgContainer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                     className="image"
                />
            </div>

            <div className="contentContainer">
                <span className="nameText">{props.name}</span>
                <span className="commentText">{props.comment}</span>

            </div>
        </div>

    );

}

   //컴포넌트 내보내기
export default Comment;