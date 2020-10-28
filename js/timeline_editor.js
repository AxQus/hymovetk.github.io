function status_write(text_window) {
	var change_window_write = function(action) {
		text_window.addEventListener(action, function() {
			setTimeout(function() {
				text_window.style.height = "auto";
				text_window.style.height = text_window.scrollHeight+"px";
			}, 0)
		}, false);
	};
	
	change_window_write("change");
	change_window_write("keydown");
	change_window_write("drop");
	change_window_write("cut");
	change_window_write("paste");
}

function timeline_comment(element_id) {
	
	if($("#"+element_id).css("display") == "none") {
		$("#"+element_id).slideToggle(250).css("display: block");
	} else {
		$("#"+element_id).slideToggle(250).css("display: none");
	}
}