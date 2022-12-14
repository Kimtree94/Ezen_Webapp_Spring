// p.261
// 함수형

import React , {useState, useEffect} from "react";

function ConfirmButton2(props){
    // 1. useState 훅을 이용한 state 사용
    const [isConfirmed , setIsConfirmed]=useState(false);

    //2. 함수형 변수
    const handleConfirm=()=>{
        setIsConfirmed((preIsConfirmed)=>!preIsConfirmed);
    }

    const handleConfirm2=()=>{
/*        if(isConfirmed){setIsConfirmed(false)}
        else{setIsConfirmed(true)}*/
        setIsConfirmed((preIsConfirmed)=>!preIsConfirmed);
    }


    return(
        <div>
            <button onClick={handleConfirm} disabled={isConfirmed}>
                {isConfirmed ? "확인됨" : "확인하기"}
            </button>

            <button onClick={handleConfirm2}>
                버튼
            </button>
            {isConfirmed &&  <input type="text "/>}
        </div>
    );

}

// this는 클래스멤버에 접근하는 키워드니까 함수형에서는 사용 못함!!!

export default ConfirmButton2

