$(document).ready(function(){

	// javascript
	// hide the audios
	$(".allaudios").hide();

	// click the titles
    $("h3").click(function() {
		$(".allaudios").slideToggle();
	});
});