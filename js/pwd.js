/**
 * Created by hxsd on 2016/6/18.
 */
window.onload = function(){
    document.getElementsByClassName("oldPwd")[0].onblur = function(){
        var oOldPwd = document.getElementsByClassName("oldPwd")[0];
        if(oOldPwd.value=="123456"){
            document.getElementById("span3").innerHTML = " ";
        }else{
            document.getElementById("span3").innerHTML = "密码输入有误";
        }
    };
    document.getElementsByClassName("newPwd")[0].onblur = function(){
        onBlur();
        forget();
    };
    document.getElementsByClassName("pic-left")[0].onclick = function(){
        window.location.href = "setting.html";
    };
    document.getElementsByClassName("enPwd")[0].onblur = function(){
        onBlur();
        forget();
    };
    document.getElementsByTagName("button")[0].onclick = function(){
        window.location.href = "home.html";
    }
};
function forget(){
    var oNewPwd = document.getElementsByClassName("newPwd")[0];
    var oEnPwd = document.getElementsByClassName("enPwd")[0];
    if(oNewPwd.value!=oEnPwd.value){
        document.getElementById("span1").innerHTML = "密码不一致";
    }else{
        document.getElementById("span1").innerHTML = "";
    }
}
function onBlur() {
    if (document.getElementsByClassName("oldPwd")[0].value.length != 0 && document.getElementsByClassName("newPwd")[0].value.length != 0 && document.getElementsByClassName("enPwd")[0].value.length != 0) {
        document.getElementsByTagName("button")[0].style.background = "#19adb9";
    } else {
        document.getElementsByTagName("button")[0].disabled = true;
    }
};