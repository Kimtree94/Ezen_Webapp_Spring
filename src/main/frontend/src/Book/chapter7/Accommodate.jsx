// p. 235
import React,{useState, useEffect} from "react";
import useCounter from "./useCounter"; // 커스텀 훅 가져오기

const MAX_CAPACITY=10;// 전역변수 -- 최대수용인원


// 1. 컴포넌트 선언
export default function Accommodate(props){

    // 1-1. 커스텀 훅 호출해서 [인원수 , 증가함수, 감소함수] 배열 반환
    // onclick 에 커스텀훅에서 return한 함수사용하려면 커스텀 훅 호출 먼저 해줘야함!!
    const [count, increaseCount, decreaseCount]=useCounter(0);

    // 1-2. 최대 수용인원 여부 상태 메모리
    const [isFull , setIsFull] =useState(false);


    // 의존성 배열 없음[생략]
    // 실행조건 : 1.mount[컴포넌트 렌더링 된 직후] 2. update
    useEffect(()=>{
        console.log("---------------------")
        console.log("이펙트 훅 실행")
        console.log("isFull : "+ isFull)
    })


    // 1-3. 만약에 현재인원이 최대수용 인원보다 크면 true가 isFull 변수에 저장되고 아니면 false가 저장됨
        // 의존성배열 존재[count]
        // 실행조건 :  1.mount[컴포넌트 렌더링 된 직후]   2. update 의존성 배열이 업데이트 될때
    useEffect(()=>{console.log("이펙트 훅2 실행"); setIsFull(count>=MAX_CAPACITY)},[count]);
        // 의존성 배열이 깡통일때
        // 실행조건 :  1.mount[컴포넌트 렌더링 된 직후] 2. unmount : 렌더링 종료되기 전
    useEffect(()=>{console.log("이펙트 훅3 실행"); setIsFull(count>=MAX_CAPACITY)},[]);
    // 근데 true로 바꿔준다고 어디 적혀있는거지...
    // 그냥 안에 조건이 맞으면 무조건 true가 되는건가...


    // 2. 렌더링 되는 구역
    return(
        <div style={{padding: 16}}>
            <p>총 {count}명 수용했습니다.</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button> {/*useCounter에서 만들어준 커스텀훅에 return 에 넣어놓은 함수 끌어다 사용할 수 있음*/}
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{color:"red"}}>정원이 가득 찼습니다.</p> }
        </div>

    );
}
