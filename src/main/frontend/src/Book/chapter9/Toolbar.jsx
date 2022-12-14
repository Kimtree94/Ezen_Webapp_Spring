//p.279 : 컴포넌트
import React from "react";

export default function Toolbar(props){
// props를 그냥 변수처럼 생각하면 안됨!! 객체처럼 들어옴!!!
   const {isLoggedIn, onClickLogin, OnClickLogout}=props;
// const [isLoggedIn, onClickLogin, OnClickLogout]=props; ---> X 대괄호 쓰면 안됨!! 객체 처럼 생각하기!!!
    return(
      <div>
         {/* {props.isLoggedIn && <span>환영합니다.</span>}*/}

          {isLoggedIn &&<span>환영합니다.</span>}
          {isLoggedIn ?(<button onClick={OnClickLogout}>로그아웃</button>):(<button onClick={onClickLogin}>로그인</button>)}

      </div>
    );
}