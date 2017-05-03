$(document).ready(function() {
		$("#submit").click(function() {
			var nameMsg = $("#nameMsg").val();
			var email = $("#email").val();
			var phone = $("#phone").val();
			var msg = $("#message").val();
			if (nameMsg == '' || email == '' || phone == '' || msg == '') {
				alert("Error: All fields are required to send a message.");
			} else {
				// Returns successful data submission message when the entered information is stored in database.
				$.post("refreshform.php", {
				name1: nameMsg,
				email1: email,
				phone1: phone,
				msg1: msg
				}, function(data) {
				alert(data);
				$('#form')[0].reset(); // To reset form fields
				});
			}
	});
});