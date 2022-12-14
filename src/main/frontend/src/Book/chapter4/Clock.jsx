
// 1. react 기본 라이브러리 호출

// 2. 컴포넌트 만들기 [함수 만들기]
function Clock(props){

    // {변수 , 컴포넌트(함수) , 객체 등} : jsx 표현식

    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
        </div>

    );
}

export default Clock;