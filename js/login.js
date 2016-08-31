$(document).ready(function(){
	$('#btn').click(function(){
		$(this).css({border:'1px solid #19adb9'});
		var user = $('#user').val();
		var pwd = $('#pwd').val();
		if (user == 123456 && pwd == 123456) {
			window.location.href = 'views/home.html';
		}else{
			if (user.length == 0 && pwd.length == 0) {
				$('#info').html('用户名或密码不能为空!');
			}else{
				$('#info').html('用户名或密码有错误!');
			}
		}
	});
	$('#login').click(function() {
		timer = setInterval(run,100);
	});
});
var timer;
var content = '';
var count = 0;
var flag = false;
function run(){
	count++;
	content += count;
	if (!flag) {
		if (count == 7) {
			flag = true;
			content = '';
			count = 0;
		}else{
			$('#user').val(content);
		}
	}else{
		if (count == 7) {
			clearInterval(timer);
			$('#btn').animate({borderWidth:'3px'},200,function(){
				window.location.href = 'views/home.html';
			})
		}else{
			$('#pwd').val(content);
		}
	}
}

