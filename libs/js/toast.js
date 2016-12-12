module.exports = {
	makeText:function(str, time) {
		$("#toast").show();
		$("#toast").html(str);
		setInterval(function() {
			$("#toast").hide();
		}, time)
	}
}