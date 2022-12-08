//p.249
//1. 컴포넌트 처슬자 대문자
//2. 클래스컴포넌트 / 함수컴포넌트
import React from "react";

class Ex1_Event extends React.Component { //클래스형 컴포넌트

    /*----------------------------------1------------------------------*/
    //1.생성자
    constructor(props) {
        super();
        this.state = {isToggleOn: true};//state 생명주기 즉 메모리 관리
    }

    //2.이벤트 함수
    handleClick() { // prevState : state 값
        this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}));
    }



    //2.렌더링 함수
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? '켜짐' : '꺼짐'}
            </button>
        );
    }
}


export default Ex1_Event;
