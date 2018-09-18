$(document).ready(function(){

	// hide the audios
	$(".allaudios").hide();

	// click the titles
    $("h3").click(function() {
		$(this).next("div.allaudios").slideToggle();
	});
});