$(document).ready(function() {
	var app = $(".shoppingListApp");

	// add item on click
	$(".addNewButton").click(function() {
		var newItemBig = $(".addNewInputBig").val(),
			newItemSmall = $(".addNewInputSmall").val(),
			appendFunc = function(appendedValue) {
				app.find(".listItemSection").prepend(
					'<li>' +
						'<div class="whiteRec">' +
							'<img class="checkboxImage" src="images/checkboxImage.png">' +
							'<img class="checkImage" src="images/checkImage.png">' +
							'<div class="item">' +
								appendedValue +
							'</div>' +
							'<a href="javascript:undefined;" class="removeLink">' +
								'<img class="removeLink" src="images/removeLink.png">' +
							'</a>' +
						'</div>' +
					'</li>'
				);
			};

		if ($(window).width() > 767) {
			if (newItemBig !== "") {
				appendFunc(newItemBig);
				app.find(".whiteRec:first").hide().slideDown();
				$(".addNewInputBig").val("");
			}
		} else {
			if (newItemSmall !== "") {
				appendFunc(newItemSmall);
				app.find(".whiteRec:first").hide().slideDown();
				$(".addNewInputSmall").val("");
			}
		}
	});

	// trigger click when return is pressed
	// edit item when return is pressed
	app.keypress(function(e) {
		if(e.which == 13) {
			$(".addNewButton").click();
			$(".editInput").blur();
		}
	});

	// edit item on click
	app.on("click", ".item", function() {
		var itemText = $(this).text();
		$(this).text("").append($("<input class='editInput' maxlength='25'/>"));
		app.find(".editInput").val(itemText);
		$("input").focus();
	});
	app.on("blur", ".editInput", function(e) {
		if ($(this).val() !== "") {
			$(this).parent().text($(this).val());
		}
	});

	// toggle checkmark inside of checkbox
	app.on("click", ".checkboxImage", function() {
		$(this).closest(".whiteRec").find(".checkImage").show();
	});
	app.on("click", ".checkImage", function() {
		$(this).hide();
	});

	// remove item on click
	app.on("click", ".removeLink", function() {
		$(this).closest(".whiteRec").slideUp();
	});
});