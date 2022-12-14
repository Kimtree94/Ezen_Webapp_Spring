//세션 스토리지 호출
let bno=sessionStorage.getItem("bno");
//수정전 게시물정보 호출
getboard()
function getboard(){
$.ajax({
    url:"/board/getboard",
    type:"get",
    data:{"bno":bno},
    success:function(re){
      let html='<tr><th>제목</th><th>내용</th><th>첨부파일</th></tr>';
              html+='<tr><td>'+re.btitle+'</td><td>'+re.bcontent+'</td><td>'+re.bfilename.split("_")[1]+'</td></tr>'
              document.querySelector('.bview').innerHTML=html;
    }
})
}
//수정버튼 클릭시 호출되는 메소드
function upboard(){
       let upform = document.querySelector('.upform');
       let formdata = new FormData(upform);
       formdata.set("bno",bno);
       console.log(formdata.bfilename)
        $.ajax({
            url:"/board/upboard",
            type:"put",
            data:formdata,
            contentType:false, //body로 받을때
            processData:false,
            success:function(re){
            console.log(re)
            if(re==true){alert("수정완료");location.reload()}
            else{alert("글작성실패~~")}
            }
        })
}
function back(){
location.href="/board/list";
}