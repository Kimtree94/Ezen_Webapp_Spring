/*

    리액트는 싱글페이지(SPA)인것 꼭 기억하기!!, 컴포넌트 단위로 개발해야함
    State : 데이터 관리 변수
    // 1. 클래스 컴포넌트 :  생성자에서 this.state 선언해서 사용
    // 2. 함수 컴포넌트 : userState 라이브러리 사용


*/
import React , {useState, useEffect} from "react";

/*// * 오류 : 어쨋든 return은 한번이기 때문에 재렌더링 안됨 , 즉 업데이트 안됨!
export default function Counter(props){
    //------------- 1.  Js 혹은 라이브러리------------//
    var count=0;
    //------------- 2. 렌더링 되는 HTML + JSX  { } + 컴포넌트------------//
    return(
      <div>
          <p> 총 {count}번 클릭했습니다.</p>
          <button onClick={()=>{count++}}>
              클릭
          </button>
      </div>
    );
}*/

// * 해결책 : 리액트 훅이라는 곳에서 useState 라이브러리 사용
/*
export default function Counter(props){
    //------------- 1.  Js 혹은 라이브러리------------//
    const [count, setCount]=useState(0);

    /!*
        const : 상수 선언
        useState(초기값) : 배열[변수명, set함수명]이 리턴됨 / 생명주기[생성, 업데이트, 초기화]를 자동으로 해줌
        // 이걸 쓰면 set에 변화에 따라 자동으로 재렌더링이 되기 때문에 예전에 한것처럼 막 글작성하면 글리스트출력 한번 다시 실행하고 그럴필요없음

        [count , setCount]
        count : 변수명[식별자]
        setCount : 해당 변수의 값을 변경하는 함수명
    *!/


    //------------- 2. 렌더링 되는 HTML + JSX  { } + 컴포넌트------------//
    return(
        <div>
            <p> 총 {count}번 클릭했습니다.</p>
            <button onClick={()=>setCount(count+1)}>
                클릭
            </button>
        </div>
    );
}
*/
export default function Counter(props){
    //------------- 1.  Js 혹은 라이브러리------------//
    const [count, setCount]=useState(0);

    // 1.  useEffect(()=>{}) : 화살표함수 , 의존성배열 생략
    // -> mount, update 비슷하게 작동
    // update도 안쓸거면 useEffect(()=>{}, [])
    // 하나의 컴포넌트에서 여러번 사용 가능

    // unmount 작동시 return 사용

    useEffect(()=>{
        document.title=`총 ${count}번 클릭했습니다.`
    } )

    useEffect(()=>{
        document.title=`총 ${count}번 클릭했습니다.`
        return()=>{} // unmount

    })


    //------------- 2. 렌더링 되는 HTML + JSX  { } + 컴포넌트------------//
    return(
        <div>
            <p> 총 {count}번 클릭했습니다.</p>
            <button onClick={()=>setCount(count+1)}>
                클릭
            </button>
        </div>
    );
}

