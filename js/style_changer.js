function change_style(style_id) {
	var skin_1 = 'style/default.css';
	var skin_2 = 'style/darkmaxi.css';
	
	if(style_id == 1) {
		$('link[href="'+skin_1+'"]').attr('href', skin_2);
	} else {
		$('link[href="'+skin_2+'"]').attr('href', skin_1);
	}

	$.ajax({ type: "POST", url: "sub/dynamic/ch_skin.php", data: 'skin='+style_id.toString() });
}