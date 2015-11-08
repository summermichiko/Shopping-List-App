$(document).ready(function() {
	// click on add button
	$(".addNewButton").click(function(e) {
		e.preventDefault();
		var newItemBig = $(".addNewInputBig").val(),
			newItemSmall = $(".addNewInputSmall").val(),
			appendedValue;

		if ($(window).width() > 767) {
			if (newItemBig != "") {
				appendedValue = newItemBig;
				$(this).closest("body").find(".listItemSection").prepend(
					'<li>' +
						'<div class="whiteRec">' +
							'<img class="checkboxImage" src="images/checkboxImage.png">' +
							'<img class="checkImage" src="images/checkImage.png">' +
							'<div class="item">' +
								appendedValue +
							'</div>' +
							'<a href="javascript: undefined;" class="removeLink">' +
								'<img class="removeLink" src="images/removeLink.png">' +
							'</button>' +
						'</div>' +
					'</li>'
				);
				$(document).find(".whiteRec:first").hide().slideDown();
				$(".addNewInputBig").val("");
			}
		} else {
			if (newItemSmall != "") {
				appendedValue = newItemSmall;
				$(this).closest("body").find(".listItemSection").prepend(
					'<li>' +
						'<div class="whiteRec">' +
							'<img class="checkboxImage" src="images/checkboxImage.png">' +
							'<img class="checkImage" src="images/checkImage.png">' +
							'<div class="item">' +
								appendedValue +
							'</div>' +
							'<a href="javascript: undefined;" class="removeLink">' +
								'<img class="removeLink" src="images/removeLink.png">' +
							'</button>' +
						'</div>' +
					'</li>'
				);
				$(document).find(".whiteRec:first").hide().slideDown();
				$(".addNewInputSmall").val("");
			}
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