//1.list.js에서 클릭된 게시물번호 호출
let bno=sessionStorage.getItem("bno");
count()
getboard()
function count(){
$.ajax({
    url:"/board/bcount"
    type:"GET",
    data:{ "bno":bno},
    success: function(re){alert(re)}
})
}

function getboard(){
$.ajax({
    url:"/board/getboard",
    type:"get",
    data:{"bno":bno},
    success:function(re){
      let html='<tr><th>제목</th><th>내용</th><th>첨부파일</th></tr>';
              html+='<tr><td>'+re.btitle+'</td><td>'+re.bcontent+'</td><td>'+re.bflie+'</td></tr>'
              document.querySelector('.bview').innerHTML=html;
    }
})
}
//3.삭제버튼 클릭시 호출되는 메소드
function delboard(){
confirm('삭제하시겠습니까?')
$.ajax({
    url:"/board/delboard",
    type:"delete",
    data:{"bno":bno},
    success:function(re){location.href="/board/list"}
    })
}


