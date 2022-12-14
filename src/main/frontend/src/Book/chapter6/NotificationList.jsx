import React from "react";
import Notification from "./Notification";
import notification from "./Notification";

//2. data
const reservedNotifications=[
    {id:1, message : "안녕하세요, 오늘 일정 알려드립니다."},
    {id:2,message : "점심 식사 시간입니다."},
    {id:3,message : "이제 곧 미팅이 시작됩니다."},
]

// 3. 타이머 변수 [Interval]
var timer

// 4. 클래스를 이용한 컴포넌트 만들기
class NotificationList extends React.Component{
    // 1. 생성자
    constructor(props) {
        super(props);
        this.state={notifications :[ ]}; // 비어 있음
    }
    // 2. 함수1 [컴포넌트 생성]
    componentDidMount() {
        const{notifications}=this.state;    // 생명주기
        timer=setInterval(()=>{
            if(notifications.length<reservedNotifications.length){
                const index=notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({notifications:notifications});
            }else{
                this.setState({notifications:[]});  // 상태 초기화
                clearInterval(timer) // 타이머 초기화
            }
        },2000)
    }

    componentWillUnmount() {
        if(timer){
            clearInterval(timer)
        }
    }


    // 3. 함수2
    render() {
        return (
            <div>
                {this.state.notifications.map((n)=>{
                    return <Notification id={n.id} message ={n.message} />;
                })}
            </div>
        );
    }
}

// 3.
export default NotificationList;

/*
    리스트변수명.forEach((반복변수명)=>{실행문})
    리스트변수명.map((반복변수명)=>{return 반환값})
    차이점 map은 실행결과를 모은 새 배열을 리턴해준다.

 */