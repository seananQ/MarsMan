$(document).ready(function(){
	//footer切换效果
	$('footer li').each(function(index, el) {
		$(this).click(function() {
			if (index == 0) {
				window.location.href = 'home.html';
			}else if (index == 1) {
				window.location.href = 'helptt.html';
			}else if (index == 2) {
				window.location.href = 'activitya.html';
			}
		})
	})
})