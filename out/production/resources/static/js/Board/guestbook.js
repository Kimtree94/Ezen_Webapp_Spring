let gcno = 2; // 카테고리 번호 전역변수
function setgcategory() {
    let data = {gtitle: document.querySelector('.gcatetitle').value}
    $.ajax({
        url: '/board/guestcate',
        type: 'post',
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (re) {
            if (re == true) {
                alert('비회원 카테고리 등록성공');
                gcategorylist()
            } else {
                alert('실패애애애애')
            }
        }
    })
}

function setgboard() {
    let form = document.querySelector('.setgform');
    let formdata = new FormData(form);
    formdata.set("gcno", gcno)
    $.ajax({
        url: "/board/setgboard",
        type: "post",
        data: formdata,
        contentType: false,
        processData: false,
        success: function (re) {
            if (re == true) {
                alert("글 등록 완료!!");
                showList();
            } else {
                alert("글등록실패 관리자에게 문의")
            }
        }
    })
}

gcategorylist()

function gcategorylist() {
    $.ajax({
        url: "/board/guestcatelist",
        type: "get",
        success: function (re) {
            let html = "";
            re.forEach(c => {
                html += '<button type="button" onclick="gcnochange(' + c.gcno + ')">' + c.gtitle + '</button>';
            })
            document.querySelector('.guestlist').innerHTML = html;
            cbtn = document.querySelectorAll(".cbtn") // 위에서 생성된 카테고리 버튼 리스트 호출
        }
    })
}

//list출력
showList()

function showList() {
    $.ajax({
        url: "/board/showgboard",
        type: "GET",
        data: {"gcno": gcno},
        success: function (re) {
            let html = '<tr><th>게시물번호</th><th>제목</th><th>작성자</th></tr>';
            re.forEach((e) => {
                html += '<tr><th>' + e.gbno + '</th><th onclick="getgview(' + e.gbno + ')">' + e.gtitle + '</th><th>' + e.gid + '</th></tr>'
                document.querySelector('.gboardlist').innerHTML = html;
                cbtn = document.querySelectorAll(".cbtn") // 위에서 생성된 카테고리 버튼 리스트 호출
            })
        }
    })
}

function box() {
    let html = '제목<input type="text" class="dtaile_title">' +
        '<br>내용<input type="text" class="dtaile_content"><br>' +
        '<button type="button" onclick="getgview()>수정하기</button>';
    document.querySelector('.correction').innerHTML = html;
}

//4.카테고리를 선택했을떄 선택된 카테고리 번호 변경
function gcnochange(cno) {
    gcno = cno;
    alert(gcno + "의 카테고리 선택");
    showList();
}

function getgview(gbno) {
    $.ajax({
        url: "/board/showdetail",
        type: "GET",
        data: {"gbno": gbno},
        success: function (re) {
            document.querySelector('.detail_no').value = re.gbno
            document.querySelector('.detail_title').value = re.gtitle
            document.querySelector('.detail_content').value = re.gcontent
            document.querySelector('.detail_gfile').value = re.gfile
        }
    })
}

function gcorrection() {
    let form = document.querySelector('.updateform')
    let formdata = new FormData(form)
    $.ajax({
        url: "/board/gcorrection",
        type: "post",
        data: formdata,
        processData: false,
        contentType: false,
        success: function (re) {
            if (re == true) {
                alert("수정성공");
                showList();
            } else {
                alert("수정실패 관리자에게 문의해주세요")
            }
        }
    })
}

