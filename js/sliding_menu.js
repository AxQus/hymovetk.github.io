$(document).ready(function () {
	$('div#menu').click(function () {
		$(this).toggleClass('click');

		if($("div#menu_list").hasClass('toggle_css')) {
			$("div#menu_list").slideUp(250).removeClass('toggle_css');
		} else {
			if($("div#logged_list").hasClass('toggle_css')) {
				$("div#logged_list").slideUp(250).removeClass('toggle_css');
			}
			$("div#menu_list").slideToggle(250).addClass('toggle_css');
		}
	});
	
	$('input#login').click(function () {
		if($("div#login_list").hasClass('toggle_css')) {
			$("div#login_list").slideUp(250).removeClass('toggle_css');
		} else {
			$("div#login_list").slideToggle(250).addClass('toggle_css');
		}
	});
	
	$('div#logged').click(function () {
		if($("div#logged_list").hasClass('toggle_css')) {
			$("div#logged_list").slideUp(250).removeClass('toggle_css');
		} else {
			if($("div#menu_list").hasClass('toggle_css')) {
				$("div#menu_list").slideUp(250).removeClass('toggle_css');
				$("div#menu").toggleClass('click');
			}
			$("div#logged_list").slideToggle(250).addClass('toggle_css');
		}
	});
});