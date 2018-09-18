$(document).ready(function(){

	$(".allaudios").hide();

    $("h3").click(function() {
		$(this).next("div.allaudios").slideToggle();
	});
});