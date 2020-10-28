function show_section(value) {
	$(value.parentNode.getElementsByTagName("section")[0]).slideToggle(400);

	if($(value).hasClass('title_2')) {
		$(value).removeClass('title_2');
		$(value).addClass('title');
	} else {
		$(value).removeClass('title');
		$(value).addClass('title_2');
	}
}