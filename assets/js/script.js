$(document).ready(function(){

	$(".allaudios").hide();

    $("h4").click(function() {
		jQuery(this).next(".allaudios").slideToggle();
	});
});