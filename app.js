$(document).ready(function() {
	$(".top-white-line").click(".bird-img", function() {
		$(this).closest(".top-white-line").find(".bird-talk").toggle();
	});
	$("#removeItem").click(function() {
		$(this).closest(".white-rec").slideUp();
	});
	$(".white-square").click(function() {
		$(this).closest(".white-rec").find(".check-mark").toggle();
	});
});

/*$(document).keydown(function(event) {
		if (event.which == 88) {
			$('.ryu-still').hide();
			$('.ryu.ready').hide();
			$('.ryu-cool').show();
		}
	})


