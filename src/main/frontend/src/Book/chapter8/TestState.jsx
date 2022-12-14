// setState vs prevState

import React,{useState} from "react";

export default function TestState(props){
    const [state, setState]=useState(0);

    const stateadd=()=>{
        setState(state+1);
        setState(state+2);
        setState(state+3);
        setState(state+4);
        setState(state+5);
        // 위에 있는거 다실행안되고 마지막거만 실행됨
        // 비동기랑 위에거 처리하기전에 마지막거가 실행됨
    }

    const stateadd2=()=>{
        setState((prevState)=>prevState+1);
        setState((prevState)=>prevState+2);
        setState((prevState)=>prevState+3);
        setState((prevState)=>prevState+4);
        setState((prevState)=>prevState+5);
    }

    return(
      <div>
          <div>state에 저장된 값 (prevState): {state}</div>
          <button onClick={stateadd}>클릭이벤트</button>
          <button onClick={stateadd2}>클릭이벤트</button>
      </div>
    );
}

