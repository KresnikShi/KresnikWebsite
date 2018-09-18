$(document).ready(function(){

	$(".title_handling").hide();

	$("title_h2").click(function() {
		$(this).next("div.title_handling").slideToggle();
	});

	$(".allaudios").hide();

    $("title_h3").click(function() {
		$(this).next("div.allaudios").slideToggle();
	});
});