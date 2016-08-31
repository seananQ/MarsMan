/**
 * Created by hxsd on 2016/6/17.
 */
window.onload=function () {
    var canvas = document.getElementById("canvas");
    var img = document.getElementById("img");
   /* var myImg = document.getElementById("myImg");*/
    var ctx = canvas.getContext("2d");
    var circle=document.getElementsByClassName("chb-circle")[0]
    circle.onclick=function() {
        var width = document.documentElement.clientWidth || document.body.clientWidth;
        var height = document.documentElement.clientHeight || document.body.clientHeight;
        var headerH = parseInt(document.getElementsByTagName('header')[0].clientHeight) ;
        var footerH = parseInt(document.getElementsByTagName('footer')[0].clientHeight);
        canvas.width = width;
        canvas.height = height-headerH-footerH;
        ctx.drawImage(img,0,0,width, canvas.height,0,0,canvas.width,canvas.height);
        /*var imgData=ctx.getImageData(0,0,width,height);*/
       /* var minCanvas = document.getElementById("minCanvas");*/
       /* canvas.width = imgData.width;
        canvas.height = imgData.height;
        var minCtx = canvas.getContext("2d");
        minCtx.putImageData(imgData,0,0);*/
        /*myImg.src=canvas.toDataURL("image/png");*/
    }


}