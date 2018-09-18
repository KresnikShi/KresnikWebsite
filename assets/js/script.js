$(document).ready(function(){

	$(".title_handling").hide();

	$("h2").click(function() {
		$(".title_handling").slideToggle();
	});

	$(".allaudios").hide();
	
    $("h3").click(function() {
		$(".allaudios").slideToggle();
	});
});