// p.255
// 클래스형
import React from "react";

class ConfirmButton extends React.Component{

    // 1. 생성자
    constructor(props) {
        super(props);
        this.state={} // 리액트 컴포넌트에 데이터 담는 변수 [1. setState쓰면 변경간가능 - 컴포넌트 업데이트 가능 , 즉 재렌더링 가능]
        this.handleConfirm=this.handleConfirm.bind(this);
    }

    // 2. 이벤트 함수 정의
    handleConfirm(){
        this.setState((prevState)=>({isConfirmed : !prevState.isConfirmed}));
    }

    // 2. 렌더링 함수
    render() {
        return(
          <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
              {this.state.isConfirmed ? "확인됨" : "확인하기"}
          </button>
        );
    }

}
export default ConfirmButton;
