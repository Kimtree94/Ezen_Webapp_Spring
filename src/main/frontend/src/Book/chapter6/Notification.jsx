import React from "react";//1-1 react impore 필수
import Styles from './Notification.css' // 1-2 css import

//2.클래스를 이용한 컴포넌트 생성   [React.Component 에게 상속받기 ]
class Notification extends React.Component {
    constructor(props) {
        super(props);   //슈퍼클래스 생성자 호출

        this.state = {}; // 상태관리 변수 [ 비어있음 ]
    }//end

    //* 생명주기 함수 [ 클래스 컴포넌트 생명주기 함수사용 0 - 함수 컴포넌트 생명주기 함수 거의 사용하지 않음 ]
    componentDidMount() {
        console.log(`${this.props.id}출생 함수 호출`)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`${this.props.id}인생 [업데이트] 함수 호출`)
    }

    componentWillUnmount() {
        console.log(`${this.props.id}사망 함수 호출`)
    }


    //2. 랜더링 함수
    render() {
        return (
            <div className="wrapper">
                <span className={Styles.messageText}>
                    {this.props.message}
                </span>
            </div>
        );
    }//render end
}//class end

export default Notification;
