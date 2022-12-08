import React from "react";

class ConfirmButton extends React.Component {
    constructor(props) { // 생성자
        super(props);
        //리액트는 함수형 컴포넌트가 기본인듯이 사용한다
        this.state = {
            isConfirmed: false, // 리액트 컴포넌트의 데이터 변수 [ 재 랜더링 - 업데이트 ]
        };
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm(){
        this.setState((prevState)=>({
            isConfirmed: !prevState.isConfirmed,
        }));
    }
    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>

        );
    }

}

export default ConfirmButton;