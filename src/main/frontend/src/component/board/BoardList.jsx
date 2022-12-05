import React from "react";

export default function BoardList() {
    return (
        <div>
            <a href="/board/write">글쓰기[로그인했을때만표시]</a>
            <h1>글 목록 페이지</h1>
            <div className="bcategorylistbox"></div>
                <table className="blist">

                </table>
        </div>
    );
}