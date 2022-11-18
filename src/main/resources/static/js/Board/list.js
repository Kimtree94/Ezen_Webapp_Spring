
boardlist();
function boardlist(){
    $.ajax({
        url:"/board/boardlist",
        type:"get",
        success:function(re){
          let html='<tr><th>게시물번호</th><th>제목</th><th>작성자</th></tr>';
         re.forEach((e)=>{
          html+='<tr><th>'+e.bno+'</th><th onclick="getview('+e.bno+')">'+e.btitle+'</th><th>'+e.memail+'</th></tr>'
          })
          document.querySelector('.blist').innerHTML=html;
        }
    })
}

//2.게시물 조회 페이지 [ 페이지 전환 -> 클릭한 게시물번호 기록 ](
//java(세션-서버가 종료될떄 초기화 ),2. 템플릿 , 3.js(페이지 전환시 초기화 / 세션 , 쿠키)
function getview(bno){
//1.클릭한 게시물번호 저장
    //localStorage.setItem("bno",bno);
    sessionStorage.setItem("bno",bno);
//2.페이지 전환
location.href="/board/view"
}

