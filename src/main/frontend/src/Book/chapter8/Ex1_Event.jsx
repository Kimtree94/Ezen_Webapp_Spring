// p.249
import React from "react";
class Ex1_Event extends React.Component{

    // 1. 생성자
    constructor(props) {
        super(props);
        this.state={isToggleOn : true}; // state 생명주기 - 메모리 관리
        this.handleClick=this.handleClick.bind(this);
    }

    // 2. 이벤트 함수
    handleClick(){
        this.setState((prevState)=>({isToggleOn : !prevState.isToggleOn}))
    }

/*    handleClick=()=>{
        this.setState((prevState)=>({isToggleOn : !prevState.isToggleOn}))
    }*/
    // 3. 렌더링 함수
    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn}
            </button>
        );
    }
}
export default Ex1_Event;
