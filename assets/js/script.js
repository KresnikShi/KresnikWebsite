jQuery(document).ready(function () {

	// Initially hide the text
	jQuery.(".allaudios").hide();

	// Handling the title
	jQuery.(".title_handling h4").click(function() {
		jQuery(this).next(".audios").slideToggle();
	});
});