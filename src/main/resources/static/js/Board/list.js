//////////////////전역변수/////////////////////////
let bcno=0; // 선택된 카테고리 / 기본값 0 : 전체보기
//////////////////////////////////////////////////
boardlist(); // 1.페이지 열렸을때 한번 2. 카테고리번호눌렀을때 한번
function boardlist(){
    $.ajax({
        url:"/board/boardlist",
        data:{"bcno":bcno},
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

//모든 게시물 카테고리 출력 메소드
bcategorylist()
function bcategorylist(){
    $.ajax({
    url:"/board/bcategorylist",
    type:"get",
    data:{"bcno":bcno},
    success:function(re){
            let html = '<button type="button" onclick="bcnochange(0)">전체보기</button>';
            re.forEach(c=>{
            html+='<button type="button" onclick="bcnochange('+c.bcno+')">'+c.bcname+'</button>';
            })
            document.querySelector('.bcategorylistbox').innerHTML=html;
            cbtn =document.querySelectorAll(".cbtn") // 위에서 생성된 카테고리 버튼 리스트 호출
        }
    })
}
//4.카테고리를 선택했을떄 선택된 카테고리 번호 변경
function bcnochange(cno){bcno = cno;alert(bcno+"의 카테고리 선택");boardlist();}