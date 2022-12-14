import React from 'react'
import Comment from './Comment'

// 1. 데이터리스트 [서버통신과 통신된 결과물]
const comments =[ // 댓글 3개 객체를 저장하는 리스트 객체
    {// 댓글 1
        name: "박수현",
        comment: "안녕하세요 박수현입니다."
    },
    {//댓글2
        name: "유재석",
        comment: "안녕하세요 유재석입니다."
    },
    {// 댓글3
        name: "강호동",
        comment: "안녕하세요 강호동입니다."
    }

]


function CommentList(props){
    return (
    // 리스트명.map((반복변수명)=>{실행문})
        <div>
            {comments.map((c)=>{
                return (
                    <Comment name={c.name} comment={c.comment}/>
                )
            })}
        </div>

    );
}
export default CommentList;