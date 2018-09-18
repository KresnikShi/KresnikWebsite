$(document).ready(function(){

	$(".allaudios").hide();

	$("h2").click(function() {
		$(".title_handling").slideToggle();
	});

    $("h3").click(function() {
		$(".allaudios").slideToggle();
	});
});