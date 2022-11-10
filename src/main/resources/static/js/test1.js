  function getMapping1(){
             $.ajax({
            url:"http://192.168.17.123:8080/api/v1/get-api/hello",
            success:function(re){alert(re);}
                 })
            }

  function getMapping2(){
            $.ajax({
            url:"http://192.168.17.123:8080/api/v1/get-api/name",
              success:function(re){alert(re);}
                 })
          }
 function getMapping3(){
            $.ajax({
            url:"http://192.168.17.123:8080/api/v1/get-api/variable1/하하하하",
              success:function(re){alert(re);}
                 })
          }
function getMapping4(){
            $.ajax({
            url : "http://192.168.17.123:8080/api/v1/get-api/variable2/하하하",
            success:function(re){alert(re);}
                 })
          }
function getMapping5(){
            $.ajax({
            url : "http://192.168.17.123:8080/api/v1/get-api/variable3?variable=하하하",
             success:function(re){alert(re);}
                 })
          }

function getMapping6(){
            $.ajax({
            url : "http://192.168.17.123:8080/api/v1/get-api/requst1?name=qwe&email=qwe@qwe&organization=qweqweqwe",
              success:function(re){alert(re);}
                 })
          }
function getMapping7(){
            $.ajax({
            url : "http://192.168.17.123:8080/api/v1/get-api/requst2?name=qwe&email=qwe@qwe&organization=qweqweqwe",
              success:function(re){alert(re);}
                 })
          }
function getMapping8(){
            $.ajax({
            url : "http://192.168.17.123:8080/api/v1/get-api/requst3?name=qwe&email=qwe@qwe&organization=qweqweqwe",
              success:function(re){alert(re);}
                 })
          }
///////////////////////////////////////////////////////////////////////////////////////
function postMapping1(){
  $.ajax({
        url:"/api/v1/post-api/domain",
        type:"post",
        success:function(re){alert(re);}
    })
}
function postMapping2(){
        let member={
            name:"유재석",
            email:"qwqwe@qweqwe",
            organization:"asdasdasdasd"
        }
  $.ajax({
        url:"/api/v1/post-api/member",
        type:"post",
        data:JSON.stringify(member),
        contentType:"application/json", // 전송타입 : "application/json"
        success:function(re){alert(re);}
    })
}

function postMapping3(){
        let member={name:"유재석",email:"qwqwe@qweqwe",organization:"asdasdasdasd"}
  $.ajax({
        url:"/api/v1/post-api/member2",
        type:"post",
        data:JSON.stringify(member),
        contentType:"application/json", // 전송타입 : "application/json"
        success:function(re){alert(re);}
    })
}

function putMapping1(){
let member={name:"유재석",email:"qwqwe@qweqwe",organization:"asdasdasdasd"}
    $.ajax({
    url:"/api/v1/put-api/member",
    type:"PUT",
    data:JSON.stringify(member),
    contentType:"application/json",
    success:function(re){alert(re);}
    })
}
function putMapping2(){
let member={name:"유재석",email:"qwqwe@qweqwe",organization:"asdasdasdasd"}
    $.ajax({
    url:"/api/v1/put-api/member1",
    type:"PUT",
     data:JSON.stringify(member),
        contentType:"application/json",
    success:function(re){alert(re);console.log(re);}
    })
}
function putMapping3(){
let member={name:"유재석",email:"qwqwe@qweqwe",organization:"asdasdasdasd"}
    $.ajax({
    url:"/api/v1/put-api/member2",
    type:"put",
     data:JSON.stringify(member),
        contentType:"application/json",
    success:function(re){
    console.log(re);
    console.log(re.name);
     //let json = JSON.parse(re);console.log(json);
    }
    })
}
function deleteMapping1(){
$.ajax({
url:"/api/v1/delete-api/하하하하",
type:"DELETE",
success:function(re){alert(re);}
})
}
function deleteMapping2(){
$.ajax({
url:"/api/v1/delete-api/request1?variable=호호호호호",
type:"DELETE",
success:function(re){alert(re);}
})
}


