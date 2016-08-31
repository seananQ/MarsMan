
$(function () {
    /*单击弹出更改photo*/
    $(".tww-pic").click(function () {
        $(".tww-cjy-pic").css("display","block");
    });
    /*弹出退出框*/
    $(".tww-exit > p").click(function () {
        $("section:last-child").css("display","block");
    });
    //点击任何都可以取消
   $(".tww-cancal").click(function () {
       $("section:last-child").css("display","none");
   });
    $(".tww-sure").click(function () {
       $("section:last-child").css("display","none");
   });
    /*通知消息左右滑动*/
    var right = "2.7rem";
    $(".tww-circle").click(function () {
        $(this).animate({"right":right},200);
        if(right == "2.7rem"){
            right = 0;
        }else if(right == 0){
            right = "2.7rem";
        }
    });
    /*修改密码*/
    $(".tww-main_t").next().click(function(){
        window.location.href = "pwd.html";
    })
});