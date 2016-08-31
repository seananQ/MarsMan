$(function(){
	$('.subjects1').each(function(i){
		$(this).click(function(){
			$(this).siblings().children('.date').slideUp(500);
			$(this).children('.date').slideToggle(500);
		});
	});

    //history页面js
    $(".search-header p").click(function(){
   		window.location.href = "boxlist.html";
    })

    $('.search-pic').click(function(){
    	var val = $(this).next('input').val();
    	$('<p>'+val+'</p>').appendTo('.tww-main');
    	var timer = setInterval(run,300);
    })

})
var content = '加载中';
var count = 0;
function run(){
	count++;
	
	if (count%10 == 0) {
		content = '加载中';
		count = 0;
		
	}else{
		content += '. ';
		$('.ajax').html(content);
	}
	
}