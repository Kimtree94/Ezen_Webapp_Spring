alert('ssss')
getboard();
function getboard(){
    $.ajax({
        url:"/board/getboards",
        type:"get",
        success:function(re){
         console.log(re)
        }
    })
}