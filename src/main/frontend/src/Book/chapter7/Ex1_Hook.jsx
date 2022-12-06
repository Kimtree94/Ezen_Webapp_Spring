/*
    리액트는  SPA 즉 싱글 페이지를 만든다 /  컴포넌트 단위의 개발이 가능하다 (조각단위)
        State : 데이터 관리 변수
            //1. 클래스 에서는 생성자  this.state라는 변수를 선언
            //2. 함수 에서는 useState 라이브러리를 사용함

 **리액트를 함수형으로 만드는 기본 틀**
 //1. 현재 페이지에서 사용될 라이브러리 import //
 import React from "react";
export default function 함수명(props){
    //2. JS 혹은 라이브러리 //

    //3. 렌더링 되는 HTML + JSX 표현식 { } + 컴포넌트
    return() ;
}

*/

import React ,{useState}from "react";
/*
오류 : return이 한번이기 때문에 재 렌더링 불가능하다
import React from "react";
export default function Counter(props) {
    var count=0;
    return (
        <div>
            <p>총 {count} 번 클릭했습니다</p>
            <button onClick={() => count++}>
                클릭
            </button>
        </div>
    );
}*/
export default function Counter(props) {
    /*JS 혹은 라이브러리*/
    const [count ,setCount] = useState(0);
    // const 상수 선언
    // useState(초기값) : 배열[ 변수명 , set함수명 ]이 리턴 / 생명주기  [ 생성 , 업데이트 , 초기화 ]
    // [ count , setCount ]
        // count 변수명 (식별자 )
        // setCount  해당변수의 값을 변경하는 함수명 [ setter ]

    /*렌더링 되는 HTML+JSX 표현식 {} + 컴포넌트 */
    return (
        <div>
            <p>총 {count} 번 클릭했습니다</p>
            <button onClick={() => setCount(count+2)}>
                클릭
            </button>
        </div>
    );
}