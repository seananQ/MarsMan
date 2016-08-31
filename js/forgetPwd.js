window.onload = function () {

    document.getElementById("tel").onblur = function () {
         onBlur();
        if (IsMobile(document.getElementById("tel").value)) {
            document.getElementById("spy").innerHTML = " ";

        } else {
            document.getElementById("spy").innerHTML = "请输入正确的号码";
        }
    };
    document.getElementById("yanzhen").onclick = function () {
        document.getElementById("yanzhen").style.display = "none";
        document.getElementById("p1").style.display = "block";
        document.getElementById("p1").style.background = "#19adba";
        document.getElementById("p1").style.borderRadius = "4.3rem";
        m();
        id = window.setInterval("m()", 1000);
    };
    document.getElementsByClassName("enPwd")[0].onblur = function(){
        onBlur();
        forget();
    };
    document.getElementById("yzm").onblur = function(){
        onBlur();
        forget();
    };
    document.getElementsByClassName("newPwd")[0].onblur = function(){
        onBlur();
        forget();
    };
    
};
function IsMobile(text) {
    var _emp = /^\s*|\s*$/g;
    text = text.replace(_emp, "");
    var _d = /^0?1[3|4|5|8][0-9]\d{8}$/;

    if (_d.test(text)) {
        return 3;
    }
    return 0;
}
var id;
function m() {
    var oSpan2 = document.getElementById("span2");
    //alert(oSpan2.firstChild.nodeValue);
    if (oSpan2.firstChild.nodeValue == 1) {
        clearInterval(id);//停止计数器
    }
    oSpan2.firstChild.nodeValue--;
}

function forget() {
    var oNewPwd = document.getElementsByClassName("newPwd")[0];
    var oEnPwd = document.getElementsByClassName("enPwd")[0];
    if (oNewPwd.value != oEnPwd.value) {
        document.getElementById("span1").innerHTML = "密码不一致";
    } else {
        document.getElementById("span1").innerHTML = "";
    }
}
function onBlur() {
    if (document.getElementsByClassName("newPwd")[0].value.length != 0 && document.getElementsByClassName("enPwd")[0].value.length != 0) {
        if (document.getElementById("yzm").value.length != 0) {
            document.getElementsByTagName("button")[0].style.background = "#19adb9";
            document.getElementsByTagName("button")[0].onclick = function () {
                window.location.href = "home.html";
            }
        }else{
            document.getElementsByTagName("button")[0].disabled = true;
        }
    }
};