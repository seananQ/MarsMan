$(function(){
    //���ͷ���������������
    $(".cjy-bg").hide();
    $(".pic-right").click(function () {
        $(".cjy-bg").show();
    });
    $(".cjy-buttons").click(function () {
        $(".cjy-bg").hide();
    });
    //���ÿ������ť����ͬ���ȡ��
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
