angular.module("myapp",[]).controller("chb-myCtrl",function($scope,$http){
    $scope.data = {};
    $scope.x=[
    {
        "time":"2016/4/19",
        "point":"+2",
        "explain":"入选五星作品"
    },
    {
        "time":"2016/4/19",
        "point":"-0.5",
        "explain":"下午迟到"
    },
    {
        "time":"2016/3/10",
        "point":"-1",
        "explain":"下午缺勤"
    },
    {
        "time":"2016/3/10",
        "point":"-1",
        "explain":"下午缺勤"
    },
    {
        "time":"2016/3/10",
        "point":"-1",
        "explain":"下午缺勤"
    }
    ];

    //加载数据
    repeat($scope,$http);


    var count = 0;
    window.onload = function(){
        var h = document.documentElement.clientHeight || document.body.clientHeight;
        var footerH = document.getElementsByTagName('footer')[0].clientHeight;
        var oBox = document.getElementById('activitis-total');
        oBox.style.width = '100vw';
        oBox.style.height = h + footerH + 'px';
        oBox.style.overflow = 'hidden';


        //header切换
        var oHead = document.getElementsByTagName('header')[0];
        var oLi = oHead.getElementsByTagName('li');
        for (var i = 0; i < oLi.length; i++) {
            oLi[i].onclick = (function(i){
                return function (){
                    for (var j = 0; j < oLi.length; j++) {
                        oLi[j].firstElementChild.className = '';
                    }
                    this.firstElementChild.className = 'active';
                    var footerH = document.getElementsByTagName('footer')[0].clientHeight;
                    var oBox = document.getElementById('activitis-total');
                    if (i == 0) {
                        oBox.style.width = '100vw';
                        oBox.style.height = h + footerH + 'px';
                        oBox.style.overflow = 'hidden';
                    }else if(i == 3){
                        oBox.style.width = '400vw';
                        oBox.style.height = h - footerH + 'px';
                        oBox.style.overflow = 'hidden';
                    }else{
                        oBox.style.width = '400vw';
                        oBox.style.height = '';
                        oBox.style.overflow = 'auto';
                    }

                    //header切换时初始化页面
                    repeat($scope,$http);
                    count = 0;
                }
            })(i);
        }
        var h = document.documentElement.clientHeight || document.body.clientHeight;
        var x= document.getElementsByClassName('broadcast')[0];
        var y = x.getElementsByClassName('main')[0];
        var z = y.getElementsByClassName('list');


        window.onscroll = function(){
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(i);
            var z = y.getElementsByClassName('list');
            var oDiv = z[z.length-1];

            var offsetH = oDiv.offsetTop;
            if(scrollT+h>offsetH){
                count++;
                $http.get('../data/data.json').success(function(datas){
                    var len = datas.data.newsList.length;
                    for(var i=len*count;i<len*count+len;i++){
                        $scope.data.items.data.newsList[i] = datas.data.newsList[i-len*count];
                    }
                })

                $http.get('../data/activity.json').success(function(data){
                    var len = data.data.list.length;
                    for(var i=len*count;i<len*count+len;i++){
                        $scope.data.activitys.data.list[i] = data.data.list[i-len*count];
                    }
                })

            }
        };
    };
});

function repeat(scope,http){

    http.get('../data/data.json').success(function(datas){
        scope.data.items = datas;
    })

    http.get('../data/activity.json').success(function(data){
        scope.data.activitys = data;
    })
}

$(function(){

    // 弹出遮罩
    $(".chb-vidpic").children("img").eq(1).click(function(){
        $(".chb-flip-bg").show();
        $("body").attr("onmousewheel","return false")
    });

    $(".chb-flip").children("a").click(function(){
        $(".chb-flip-bg").hide();
        $("body").attr("onmousewheel","")
    });

    // 头像选择
    var divs = $(".chb-pic").children("span").children("div");


    divs.click(function(){
        if($(this).children("div").children("img").attr("src")=="../images/circle02.png"){
            divs.children("div").children("img").attr("src","../images/circle02.png");
            $(this).children("div").children("img").attr("src","../images/circle03.png");
        }else if($(this).children("div").children("img").attr("src")=="../images/circle03.png"){
            divs.children("div").children("img").attr("src","../images/circle02.png");
        }
    });

    var replace;

    $(".cjy-cPic").each(function(index,dom){
        $(this).next("div").children('img').click(function(){
            if($(".cjy-cPic").next("div").children('img').attr("src") == "../images/circle02.png" ){
                replace=$('.cjy-cPic').attr("src");
            }
        })
    });
    $(".pic-right").click(function () {
        $(".tww-pic").attr("src",replace);
        
    });





    var pageArr = ['window.html','notice.html','broadcasta.html','xxx.html'];
    var pageUrl = document.referrer;
    var index = pageUrl.lastIndexOf('/');
    var name = pageUrl.substr(index+1);


    var w=document.documentElement.clientWidth || document.body.clientWidth;


    $('#activitis-total').css('width',w*4);
    $('li').each(function(){
        $(this).click(function(i,el){
            var i=$(this).index();
            $('#activitis-total').animate({'margin-left':-w*i},500);
        })
    })


    $('.banner').click(function(){
        window.location.href = 'window.html';
    });



    $('.pic-left').click(function(){
        window.location.href = "activitya.html";

    })

    for(var item=0;item<pageArr.length;item++){
        if(pageArr[item] == name){

            $('#activitis-total').css({'margin-left':-w*item});
            $('header li').children('span').removeClass('active');
            $('header li').eq(item).children('span').addClass('active');
        }
    }

});
