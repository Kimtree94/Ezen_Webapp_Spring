let gcno = 2; // 카테고리 번호 전역변수

function setgcategory(){
let data={gtitle:document.querySelector('.gtitle').value}
$.ajax({
url:'/board/guestcate',
type: 'post',
data:JSON.stringify(data),
contentType:"application/json",
success: function(re){
    if(re==true){alert('비회원 카테고리 등록성공');gcategorylist()}
    else{alert('실패애애애애')}
}
})
}
gcategorylist()
function gcategorylist(){
    $.ajax({
    url:"/board/guestcatelist",
    type:"get",
    success:function(re){
            let html = "";
            re.forEach(c=>{
            html+='<button type="button" onclick="gcnochange('+c.gcno+')">'+c.gtitle+'</button>';
            })
            document.querySelector('.guestlist').innerHTML=html;
            cbtn =document.querySelectorAll(".cbtn") // 위에서 생성된 카테고리 버튼 리스트 호출
        }
    })
}

function setgboard(){
let data={
gtitle:document.querySelector('.gtitle').value,
gcontent:document.querySelector('.gcontent').value,
gid:document.querySelector('.gid').value,
gcno:gcno
}
console.log(data.gtitle)
$.ajax({
    url:"/board/setgboard",
    type:"post",
    data:JSON.stringify(data),
    contentType:"application/json",
    success: function(re){
    console.log(re)}
})

}

//4.카테고리를 선택했을떄 선택된 카테고리 번호 변경
function gcnochange(gcno){gcno = gcno;alert(gcno+"의 카테고리 선택");}