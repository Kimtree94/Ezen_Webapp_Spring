
//p.104
const name = '소플'; // js 문자 변수
const element = <h1> 안녕 ,{name}</h1>;  // js + html
    //jsx변수 호출 표현식 : { 변수명 }

ReactDOM.render(element,docment.getElementsById('root'));

function formatName(user){
    return user.firstName + ' ' + user.lastName;
    }

   const user={
   firstName: 'Inje',
   lastName: 'Lee'
   };
    //html 구성
   const element = (<h1>Hello,{formatName(user)}</h1>);
    //해당 id에 html 렌더링(뿌려주기/넣어주기/표시)
   ReactDOM.render(element,docment.getElementsById('root'));

   //--------------------활용--------------------------//
  function getGreeting(user){
    if(user){
        return<h1>Hello,{formatName(user)}!</h1>;
    }
    return <h1>Hello,Stranger.</h1>
  }
   //--------------------JSX 식 HTML--------------------------//
   const element = <div><h1>안녕하세요</h1><h2>열심히 리액트를 공부해 봅시다!</h2></div>