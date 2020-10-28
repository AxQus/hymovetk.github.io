function auto_copy(text) {
	var temp = $("<input>");
	$("body").append(temp);
	temp.val(text).select();
	document.execCommand("copy");
	temp.remove();
	alert("Skopiowano do twojego schowka!");
}