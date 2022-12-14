//카테고리 기본값
let bcno = 2; // 카테고리 번호 전역변수
//게시물 등록 메소드
function setboard(){
  let boardform = document.querySelector('.boardform');
  let formdata = new FormData(boardform);
  formdata.set("bcno", bcno) // 폼 데이터에 데이터 카테고리 정보 추가

    $.ajax({
        url:"/board/setboard",
        type:"post",
        data:formdata,
        contentType:false,
        processData:false,
        success:function(re){
        console.log(re)
        if(re==true){
        alert("글작성 성공~~!")
        location.href="/board/list"
        }
        else{alert("글작성실패~~")}
        }
    })
}

//게시물 카테고리 등록 메소드
function setbcategory(){
let data={bcname:document.querySelector('.bcname').value}
$.ajax({
    url:"/board/setbcategory",
    type:"post",
    data:JSON.stringify(data),
    contentType:"application/json",
    success : function(re){
    if(re==true){alert("카테고리추가성공");bcategorylist()}
    else{alert("카테고리추가실패")}
    }

})
}
//모든 게시물 카테고리 출력 메소드
bcategorylist()
function bcategorylist(){
    $.ajax({
    url:"/board/bcategorylist",
    type:"get",
    success:function(re){
            let html = "";
            re.forEach(c=>{
            html+='<button type="button" onclick="bcnochange('+c.bcno+')">'+c.bcname+'</button>';
            })
            document.querySelector('.bcategorylistbox').innerHTML=html;
            cbtn =document.querySelectorAll(".cbtn") // 위에서 생성된 카테고리 버튼 리스트 호출
        }
    })
}
//4.카테고리를 선택했을떄 선택된 카테고리 번호 변경
function bcnochange(cno){bcno = cno;alert(bcno+"의 카테고리 선택");}
