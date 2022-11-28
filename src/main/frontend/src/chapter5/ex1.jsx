function App(props){
return(
    <Profile name="소플" introduction="안녕하쇼 ,소풀이오" viewCount={1500} />
    );
}


function App(props){
    return(
        <Layout
            width={2560}    //Layout : 컴포넌트
            height={1440}   //Layout 컴포넌트에 width속성 전달
            header={ <Header title="소플의 블로그다."/>}//Layout 컴포넌트에 height속성의 값 전달
            footer={<Footer/> } //Layout 컴포넌트에 footer 컴포넌트 전달
         />
    );
}