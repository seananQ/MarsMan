$(function(){
    //点击头部分享弹出分享界面
    $(".cjy-bg").hide();
    $(".pic-right").click(function () {
        $(".cjy-bg").show();
    });
    $(".cjy-buttons").click(function () {
        $(".cjy-bg").hide();
    });
    //点击每个分享按钮，形同点击取消
    $(".cjy-share-pic div").click(function () {
        $(".cjy-bg").hide();
    });


    var pageUrl = document.referrer;
    var index = pageUrl.lastIndexOf('/');
    var name = pageUrl.substr(index+1);

    $('.pic-left').click(function(){
        window.location.href = name;
    })



});
