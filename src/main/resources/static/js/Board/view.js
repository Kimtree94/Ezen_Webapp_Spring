//1.list.js에서 클릭된 게시물번호 호출
let bno=sessionStorage.getItem("bno");
getboard()
function getboard(){
$.ajax({
    url:"/board/getboard",
    type:"get",
    data:{"bno":bno},
    success:function(re){
    console.log(re)
      let html='<tr><th>제목</th><th>내용</th><th>첨부파일</th><th>'+
      '<a href="/board/filedownload?filename='+re.bfilename+'"><button type="button">첨부파일 다운로드</button></a></th></tr>';
              html+='<tr><td>'+re.btitle+'</td><td>'+re.bcontent+'</td><td>'+re.bfilename.split("_")[1]+'</td></tr>'
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

