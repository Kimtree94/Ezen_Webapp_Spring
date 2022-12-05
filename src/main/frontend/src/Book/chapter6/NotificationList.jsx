import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1, message: "안녕하세요 , 오늘 일정을 알려드립니다.",
    },
    {
        id: 2, message: "점심 식사 시간입니다.",
    },
    {
        id: 3, message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    //1. 함수1
    componentDidMount() {
        const {notifications} = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({notifications: []}) // 상태 초기화

                clearInterval(timer); // 타이머 초기화
            }
        }, 1000); // 1초마다 위 코드 실행
    }//class end

    //추가코드 // NotificationList 컴포넌트 사망시 [ 끝났을때  ] timer 클리어
    componentWillUnmount() {
        if(timer){//timer 변수에 setInterval 함수가 있으면
            clearInterval(timer); // setInterval 종료
        }
    }

    //2.함수2
    render() {
        return (
            <div>
                {this.state.notifications.map((n) => {
                    return <Notification id={n.id} message={n.message}/>;
                })}
            </div>
        )
    }
}

export default NotificationList;


/*
    리스트변수명.

*/