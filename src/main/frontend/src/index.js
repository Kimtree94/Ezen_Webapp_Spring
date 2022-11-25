import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//1.사용할 컴포넌트 호출 [ import 컴포넌트명  from 파일명  ]
import Library from './chapter3/Library'
import Clock from './chapter4/Clock'

//2.DOM 컨테이너 [public - >index.html 안에 있는 태그 ]
const root = ReactDOM.createRoot(document.getElementById('root'));

//3.Dom 컨테이너 렌더링
//2.Library 컴포넌트를 root에 렌더링
/*    root.render(
      <React.StrictMode>
        <Library />
      </React.StrictMode>
    );*/

//3. Clock 컴포넌트를 root에 렌더링
//setInterval(()=>{},밀리초)
    ////setInterval((인수)=>{실행문},밀리초)
  setInterval(()=>{
       root.render(
        <React.StrictMode>
            <Clock/>
        </React.StrictMode>
       );
  },1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
