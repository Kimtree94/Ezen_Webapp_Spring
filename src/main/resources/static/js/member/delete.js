alert('sss')

function setdelete(){
alert('dddd')
let mpassword =document.querySelector('.mpassword').value;
$.ajax({
    url:"/member/setdelete",
    type:"delete",
    data:{"mpassword":mpassword},
    success:function(re){alert(re)}
})
}