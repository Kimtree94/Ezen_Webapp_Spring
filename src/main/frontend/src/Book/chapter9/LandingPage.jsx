//281

import React,{useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props){
    //state 선언 : const [ 변수명 , set함수명 ] = useState(초기값)
    const [isLoggedIn,setIsLoggedIn]=useState(false);

    const onClickLogin=()=>{
        setIsLoggedIn(true);
    }

    const onClickLogout=()=>{
        setIsLoggedIn(false);
    }

    return(
        <div>
           <Toolbar
           isLoggedIn={isLoggedIn}
           onClickLogin={onClickLogin}
           onClickLogout={onClickLogout}
           />
            <div style={{padding:16}}>소플과 함께하는 리액트 공부!</div>
        </div>
    );
}

export default LandingPage;