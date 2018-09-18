$(document).ready(function(){

	$(".title_handling").hide();

	$("h2").click(function() {
		$(this).next(".title_handling").slideToggle();
	});

	$(".allaudios").hide();

    $("h3").click(function() {
		$(this).next(".allaudios").slideToggle();
	});
});