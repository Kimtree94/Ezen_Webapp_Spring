import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './component/member/Signup'
import Index from "./component/Index";
// 1. 사용할 컴포넌트 호출 [import 컴포넌트명 from 파일명]
import Library from './Book/chapter3/Library'
import Clock from './Book/chapter4/Clock'
import CommentList from './Book/chapter5/CommentList'
import NotificationList from "./Book/chapter6/NotificationList";
import Counter from './Book/chapter7/Ex1_Hook'
import Accommodate from "./Book/chapter7/Accommodate";
import TestState from "./Book/chapter8/TestState";
import ConfirmButton from "./Book/chapter8/ConfirmButton";
import ConfirmButton2 from "./Book/chapter8/ConfirmButton2";
import LandingPage from "./Book/chapter9/LandingPage";
import Calculator from "./Book/chapter12/Calculator";
// 2. Dom 컨테이너 [public -> index.html 안에 있는 태그]
const root = ReactDOM.createRoot(document.getElementById('root'));

// 3. DOm 컨테이너 렌더링
// 1. 기본값 [app.js 컴포넌트를 root에 렌더링]
/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// 2. 기본값 [Kibrary 컴포넌트를 root에 렌더링]
/*root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);*/

// 3. [Clock 컴포넌트를 root에 렌더링]
    // 1. setInterval 1초마다 렌더링

/*setInterval(()=>{
    root.render(
      <React.StrictMode>
        <Clock />
      </React.StrictMode>
    );

},1000);*/


// 4.

/*
root.render(
  <React.StrictMode>
    <Signup />
  </React.StrictMode>
);
*/





root.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
);




/*
// 6.
root.render(
    <React.StrictMode>
        <NotificationList />
    </React.StrictMode>
);*/

/*

root.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>
);

*/

/*
root.render(
    <React.StrictMode>
        <LandingPage />
    </React.StrictMode>
);
*/

/*
root.render(
    <React.StrictMode>
        <Calculator />
    </React.StrictMode>
);
*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
