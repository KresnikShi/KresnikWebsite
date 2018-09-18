// jQuery(document).ready(function () {

// 	// Initially hide the text
// 	jQuery.(".allaudios").hide();

// 	// Handling the title
// 	jQuery.(".title_handling h4").click(function() {
// 		jQuery(this).next(".audios").slideToggle();
// 	});
// });

$(document).ready(function(){

	$(".allaudios").hide();

    $(".title_handling h3").click(function() {
		jQuery(this).next(".allaudios").slideToggle();
	});
});