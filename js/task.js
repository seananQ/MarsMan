$(function () {
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    
    $('body').height(h);
    var h1 = $('.common-header').outerHeight();
    
    var h2 = $('.cjy-content').outerHeight();
    

    var h3 = h-h1-h2-h*1.2/100;
    
    $('.cjy-taskPic').outerHeight(h3);
    //获取关注点击数量
    var count=20;
   $(".cjy-zan").click(function () {
       count++;
      $(".cjy-zcount").html(count);
   });
    //获取点赞，图片变实
    $(".common-header .left").toggle(function () {
        $(this).attr("src","../images/good01.png");
    }, function () {
        $(this).attr("src","../images/good02.png");
    });
    //点击头部分享弹出分享界面
    /*$(".cjy-bg").hide();*/
    $("div.common-header .right").click(function () {
        $(".cjy-bg").show();
    });
    $(".cjy-buttons").click(function () {
        $(".cjy-bg").hide();
    });
    //点击每个分享按钮，形同点击取消
    $(".cjy-share-pic div").click(function () {
        $(".cjy-bg").hide();
    });
    //点击分享跳出分享到界面
    $(".cjy-bg").hide();
    $(".cjy-button-left").click(function () {
        $(".cjy-bg").show();
    });
    $(".cjy-buttons").click(function () {
        $(".cjy-bg").hide();
    });
    //点击每个分享按钮，形同点击取消
    $(".cjy-share-pic div").click(function () {
        $(".cjy-bg").hide();
    });
    //点击保存,并跳转框，显示5秒后隐藏
    $(".cjy-gain").hide();
    $(".cjy-button-right").click(function () {

        
        $('.cjy-gain').fadeIn(100).delay(3000).fadeOut(300,function(){
            window.location.href = 'home.html';
        });
    });
    /*点击更换背景图*/
    $('.color').each(function(i,dom){
        $(this).click(function(){
            $('.cjy-taskPic').css('background-image',' url("../images/story0'+(i+1)+'.jpg")');
        });
    });
});