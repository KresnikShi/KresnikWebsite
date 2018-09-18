$(document).ready(function(){

	$(".allaudios").hide();

    $("h3").click(function() {
		jQuery(this).next(".allaudios").slideToggle();
	});
});