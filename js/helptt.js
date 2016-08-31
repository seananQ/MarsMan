$(function () {

    // 获取时间
    function time(){
    	var str = '';
    	var d = new Date();
    	var s = d.getMinutes();
    	var day = d.getDate();
    	var h = d.getHours();
    	if (d.getHours() < 10) {
    		h = "0" + h;
    	}
    	if (d.getMinutes() < 10) {
    		s = "0" + s;
    	}
    	str += h + ':' + s ;
    	return str;
    }
    function day(){
    	var ymd='';
    	var d = new Date();
    	var y = d.getFullYear();
    	var m = d.getMonth()+1;
    	var day = d.getDate();
    	ymd = y+'/'+m+'/'+day;
    	return ymd;
    }

    $('.tww-box').focus(function() {
    	$('.tww-help').css({background: '#19adb9'}).prop({'disabled': ''});
    });
    $('.tww-help').click(function() {
    	if ($('.tww-box').val() != '') {
    		$('.fzk-section').css({backgroundColor:'#fff'});
    		$('.tww-footer_t').fadeIn(800).next('p').fadeOut(50);
    		$('.fzk-box .tww-footer_m:last').find('h2').html(time()).find('p').html(day());
    		$('.fzk-box .tww-footer_m:last').find('p').html(day());
    		$('.fzk-box .tww-footer_m:last').clone(true, true).prependTo('.fzk-box').fadeIn(500);
    	}
		$('.tww-box').val('');
    })

    var item;
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    var h1 = $('.common-header').outerHeight();
    var h2 = $('.tww-main').outerHeight();
    
    /*$('.fzk-section').outerHeight(h-h1-h2);*/
    $('.tww-value').each(function(index, el) {
    	$(this).click(function() {

    		$('.tww-alert').fadeIn(100).outerHeight(h);
    		item = $(this).index('.tww-value');
    	});
    });
    

    var arr = ['糟糕','一般','不错','很好'];
    $('.tww-satisfy').children('img').each(function(index, el) {
    	$(this).click(function() {
    		$(this).siblings().attr('src','../images/star02.png');
    		$(this).attr('src','../images/star01.png');
    		$(this).prevAll().attr('src','../images/star01.png');
    		$('.tww-btn').children('p').html(arr[index]);
    	})
    })

    $('.tww-btn').children('button').click(function() {
    	
    	$('.tww-alert').fadeOut(100);
        $('.tww-satisfy').children().attr('src','../images/star02.png');

    	$('.tww-value').eq(item).html('已评价').css({background:'#fff',color:'#606060'})
    	.parent().prev().html('已处理');
    })


})