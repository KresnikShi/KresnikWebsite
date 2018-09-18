$(document).ready(function(){

	$(".title_handling").hide();

	$("h2").click(function() {
		$(this).next("div.title_handling").slideToggle();
	});

	$(".allaudios").hide();

    $("h3").click(function() {
		$(this).next("div.allaudios").slideToggle();
	});
});