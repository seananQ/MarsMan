var timer;
var count = 0;
//width是屏幕的宽度
var w = document.documentElement.clientWidth || document.body.clientWidth;
$(document).ready(function () {
    var wid = parseInt($('.banner-run').children().css('width'));
    $('.banner').css({width:wid+'px'});
    $('.banner-run img').first().clone().appendTo('.banner-run');
    timer = setInterval(imgPlay, 2000);
    $('.banner').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(imgPlay, 2000);
    });
    //出现折线图页面
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    $('.scorea').css('top',-h-30+'px');
    // $('.scorea').css('height',h);

    $('.words').click(function(){
        $('.scorea').animate({'top':0},800,function(){
            timeOut(num,cont,x);
        });
    });
    //收起折线图页面
    $('.bottom-shadow').click(function(){
        $('.scorea').animate({'top':-h-30+'px'},1000);
        $('.bottom-header').children('a').css('width',0);
        $('.mask').css('width',0);
        $("#canvas").fadeOut();
    });
    //折线图数据
    var num=[
        {fenshu:'B+',fenshu2:80,week:'第一周'},
        {fenshu:'A-',fenshu2:85,week:'第二周'},
        {fenshu:'A-',fenshu2:85,week:'第三周'},
        {fenshu:'A',fenshu2:90,week:'第四周'},
        {fenshu:'A+',fenshu2:95,week:'第五周'},
        {fenshu:'B',fenshu2:75,week:'第六周'},
        {fenshu:'A-',fenshu2:85,week:'第七周'},
        {fenshu:'A',fenshu2:90,week:'第八周'},
        {fenshu:'B',fenshu2:75,week:'第九周'},
        {fenshu:'B+',fenshu2:80,week:'第十周'},
        {fenshu:'A',fenshu2:90,week:'第十一周'},
        {fenshu:'B-',fenshu2:70,week:'第十二周'},
        {fenshu:'A',fenshu2:90,week:'第十三周'},
        {fenshu:'A+',fenshu2:95,week:'第十四周'},
        {fenshu:'A+',fenshu2:95,week:'第十五周'},
        {fenshu:'B+',fenshu2:80,week:'第十六周'}
    ];
    var div = document.getElementsByClassName('xss-canvas')[0];
    //td个数  周数
    $('table').css('width',w*16/5);
    $('#canvas').css('left',-w/10);
    $('.week').css('width',w*16/5);
    for(var i in num){
        var content='<td></td>';
        $('table').find('tr').append(content);
        var week='<li>'+num[i].week+'</li>';
        $('.week').append(week);
    }
    $('td').css('width',w/5);
    $('.week').children('li').css('width',w/5);
    //canvas绘图  折线图
    var canvas=document.getElementById('canvas');
    var cont=canvas.getContext('2d');
    canvas.width=w*16/5;
    canvas.height = div.clientHeight;
    var x=canvas.width;
    var y=canvas.height;
    var lg=cont.createLinearGradient(0,0,x,0);
    lg.addColorStop(0,'#2cc599');
    lg.addColorStop(1,'#75c7ef');
    cont.beginPath();
    cont.moveTo(0,y);
    cont.font = '1.6rem Arial';
    cont.textAlign = 'center';
    for(var i=0;i<num.length;i++){
        cont.lineTo(x/16*(i+1),(100-num[i].fenshu2)*6);
    }
    $('table').click(function(){
        window.location.href = 'taskgs.html';
    });
    cont.lineTo(x,y);
    cont.closePath();
    cont.fillStyle=lg;
    cont.fill();
});
//绘制曲线图
function timeOut(num,cont,x){
        $("#canvas").fadeIn(3000);
        $('.bottom-header').children('a').animate({'width':'95%'},2500);
        timer1=setInterval(play,2500/95);
        //曲线图
        $('.mask').animate({'width':w},2500);
        for(var i=0;i<num.length;i++){
            cont.fillText(num[i].fenshu,x/16*(i+1),(100-num[i].fenshu2)*6-12);
        }
}
//数据加载
var item=0;
var timer1;
function play(){
    item++;
    $('.num').html(item+'%');
    if(item==95){
        item=0;
        clearInterval(timer1);
    }
}

//轮播图
function imgPlay() {
    var size = $('.banner-run img').size();
    count++;
    if (count == size) {
        $('.banner-run').css({left: 0});
        count = 1;
    }
    var imgH = count * parseInt($('.banner-run').children().css('width'));
    $('.banner-run').stop().animate({'left': -imgH + 'px'}, 600);
}

