getloginMno()
function getloginMno(){
    $.ajax({
    url:"/member/getloginMno",
    type:"get",
    success:function(re){
        let headerbox ='';
        alert(re);
        if(re==""){ //로그인 안했다
            headerbox +='<a href="/member/signup"><button type="button"> 회원가입 </button></a>'+
                        '<a href="/member/login"><button type="button"> 로그인 </button></a>'+
                        '<a href="/board/guestbook"><button type="button"> 비회원방문록</button></a>'
        }else{ //로그인 했따
            headerbox+=' <a href="/member/logout"> <button type="button"> 로그아웃 </button></a><br>'+
                       ' <a href="/member/findpassword"> <button type="button"> 비밀번호찾기 </button></a>'+
                       ' <a href="/member/update"> <button type="button"> 비밀번호수정 </button></a>'+
                       ' <a href="/member/delete"> <button type="button"> 회원탈퇴 </button></a>'
        }
        document.querySelector('.headerbox').innerHTML = headerbox;
     }
    })
}
/*function logout(){
    $.ajax({
    url:"/member/logout",
    type:"get",
    success:function(re){
        alert(re);
        if(re=="1"){
        alert("로그아웃성공")
        location.href="/"
           }else{
           alert("로그아웃실패")
           }
         }
     })

}*/

//회원목록
list()
function list(){
        $.ajax({
        url:"/member/list",
        type:"get",
        success:function(re){
            let html='<tr><th>번호</th><th>이메일</th></tr>';
            re.forEach((m)=>{
                    html+=
                    '<tr><th>'+m.mno+'</th><th>'+m.memail+'</th></tr>'
                })
                document.querySelector('.mtable').innerHTML = html;
            }
        })
    }

