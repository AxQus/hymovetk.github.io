function new_timeline() {
	document.body.style.cursor = "wait";
	var sendData = 'timeline='+encodeURIComponent($("#new_status").val());
	$.ajax({
		type: "POST",
		url: "sub/dynamic/new_status.php",
		data: sendData,
		success: function(data) {
			document.body.style.cursor = "";
			if(data == '2') {
				alert("Twój wpis nie może mieć mniej niż 2 znaki i nie więcej niż 1000 znaków.");
			} else if(data == '1') {
				location.reload();
			} else if(data == '0') {
				alert("Od twojego ostatniego posta nie minęło jeszcze 15 sekund.");
			} else {
				alert("Wystąpił błąd! Spróbuj ponownie za chwilę.");
			}
		}
	});
}