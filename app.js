$(document).ready(function() {

	// change placeholder depending on user screen width
	if ($(window).width() > 767) {
		$('.addNewInput').attr('placeholder', 'Add an item to your grocery list');
	} else {
		$('.addNewInput').attr('placeholder', 'Add an item');
	}

	// click on add button
	$(".addNewButton").click(function(e) {
		e.preventDefault();
		var newItem = $(".addNewInput").val();
		if (newItem != "") {
			$(this).closest("body").find(".listItemSection").prepend(
				'<li>' +
					'<div class="whiteRec">' +
						'<img class="checkboxImage" src="images/checkboxImage.png">' +
						'<img class="checkImage" src="images/checkImage.png">' +
						'<div class="item">' +
							newItem +
						'</div>' +
						'<a href="javascript: undefined;" class="removeLink">' +
							'<img class="removeLink" src="images/removeLink.png">' +
						'</button>' +
					'</div>' +
				'</li>'
			);
			$(document).find(".whiteRec:first").hide().slideDown();
			$(".addNewInput").val("");
		}
	});

	// hit return triggers click on add button
	$(document).keypress(function(e){
		if(e.which == 13){
			$('.addNewButton').click();
		}
	});

	// toggle check inside of checkbox
	$(document).on("click", ".checkboxImage", function() {
		$(this).closest('.whiteRec').find('.checkImage').show();
	});
	$(document).on("click", ".checkImage", function() {
		$(this).hide();
	});

	$(document).on("click", ".removeLink", remove);

	$(document).on("click", ".whiteSquare", showCheck);

	$(document).on("click", ".checkMark", hideCheck);
});

function remove() {
	$(this).closest(".whiteRec").slideUp();
}

function showCheck() {
	$(this).closest(".whiteRec").find(".checkMark").show();
}

function hideCheck() {
	$(this).hide();
}