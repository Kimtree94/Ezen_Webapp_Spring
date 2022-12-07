// p. 235
import React,{useState, useEffect} from "react";
import useCounter from "./useCounter"; // 커스텀 훅 가져오기
const MAX_CAPACITY=10;// 전역변수 -- 최대수용인원

// 1. 컴포넌트 선언
export default function Accommodate(props){
    // onclick 에 커스텀훅에서 return한 함수사용하려면 커스텀 훅 호출 먼저 해줘야함!!
    // 1-1. 커스텀 훅 호출해서 [인원수 , 증가함수, 감소함수] 배열 반환
    const [count, increaseCount, decreaseCount]=useCounter(0);
    // 1-2. 최대 인원 여부
    const [isFull,setIsFull]=useState(false);

    //의존성배열 없음 [ 생략 ]
    //실행조건 : 1. mount[컴포넌트 렌더링된 직후 ] , 2.update 의존성배열이 업데이트 될때
    useEffect(()=>{
        console.log("=============")
        console.log("Hook run")
        console.log("isFull"+isFull)
    })


    //3. 만약에 현재인원이 최대수용 인원보다 크거나 같으면 true 가  isFull변수에 true가 저장되고
    // 아니면 false 가 저장된다
    //의존성 배열 존재  [ count ]
    useEffect(()=>{setIsFull(count>=MAX_CAPACITY)},[count])
    // 2. 렌더링 되는 구역
    return(
        <div style={{padding: 16}}>
            <p>총 {count}명 수용했습니다.</p>
            <button onClick={increaseCount}disabled={isFull}>입장</button> {/*useCounter에서 만들어준 커스텀훅에 return 에 넣어놓은 함수 끌어다 사용할 수 있음*/}
            <button onClick={decreaseCount}>퇴장</button>
            {isFull&& <p style={{color:"red"}}> 정원이 가득 찼습니다.</p>}
        </div>

    );
}