/*
import React {useState, useEffect}from "react";

// state 상태에 따른 온라인인지 오프라인인지 텍스트로 보여주는 컴포넌트
export default function UserStatus(props){

    // 1.
    const [isOnline, setIsOnline]=useState(null);

    // const isOnline=true;
    // 변수는 변하지만 변한 변수의 값이 재렌더링이 안됨
    // 이런식으로 쓰면 업데이트 안됨! return은 한번밖에 안되니까


    // 생명주기 : mount = 렌더링 후 한번 , update = 재렌더링마다 , unmount = 렌더링 삭제시 한번
    useEffect(()=>{
        function handleStateChange(status){
            setIsOnline(status.isOnline);
        }
        ServerAPI.subscribeUserStatus(props.user.id, handleStateChange);
        return ()=>{
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStateChange);
        }
    })

    // 1.
    if(inOnline==null){return '대기중...'}
    return isOnline ? '온라인' : '오프라인';
    // 2.
    return(
        <li style={{color : isOnline ? 'green' : 'black'}}>
            {props.user.name}
        </li>
    )


}*/
import React , {useState, useEffect} from "react";

const userList=[{id :1 , name : 'Inje'},{id :2 , name : 'Mike'},{id :3 , name : 'Steve'}]

function chatUserStatus(props){
    const [userId, setUserId]=useState(1); // select가 체인지 될때마다 회원 아이디 변경
    const isOnline=useUserStatus(userId);// 해당 유저의 온라인 상태 여부 가져온다.
}

// 1. 커스텀 훅
function useUserStatus(userId){

    // 1.
    const [isOnline, setIsOnline]=useState(null);

    useEffect(()=>{
        function handleStateChange(status){
            setIsOnline(status.isOnline);
        }
        ServerAPI.subscribeUserStatus(props.user.id, handleStateChange);
        return ()=>{
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStateChange);
        }
    })

    return isOnline;

}
// 2. 온라인 상태를 문자로 표시하는 컴포넌트
function UserStatus(props){
    const isOnline=useUserStatus(props.user.Id)
    if(isOnline==null){return '대기중'}
    return isOnline ? '온라인' : '오프라인'

}

// 3. 온라인 상태를 색상으로 표시하는 컴포넌트
function UserListItem(props){
    const isOnline=useUserStatus(props.user.Id)
    return(<li style={{color : isOnline ? 'green' : 'black'}}>{props.user.name}</li>)
}


export default UserStatus;