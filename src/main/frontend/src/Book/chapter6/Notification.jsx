// 1.react import
import React from "react";
import './Notification.css'

// 2. 클래스를 이용한 컴포넌트 생성 [React.Component에게 상속받기]
class Notification extends React.Component{
    // 1. 생성자
    constructor(props) {
        super(props); // 슈퍼클래스 생성자 호출
        this.state={ }; // 상태관리 변수[비어 있음]

    } // end

    // * 생명주기 함수 [클래스 컴포넌트 생명주기 함수 사용O - 함수 컨포넌트는 생명주기 함수 거의 사용 X]
    componentDidMount() {
        console.log(`${this.props.id}componentDidMount() called`)
    }

    componentDidUpdate() {
        console.log(`${this.props.id}componentDidUpdate() called`)
    }
    componentWillUnmount() {
        console.log(`${this.props.id}componentWillUnmount() called`)
    }


    // 2. 렌더링 함수
    render(){
        return(
          <div className="wrapper">
              <span className="messageText">
                  {this.props.message}
              </span>
          </div>
        );

    }// render end
}// class end

// 3. 컴포넌트 내보내기
export default Notification;


