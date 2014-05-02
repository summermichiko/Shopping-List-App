$(document).ready(function() {
	$("#make-new-item-box").focus();
	$(".bird-img").click(function() {
		$(this).closest(".top-white-line").find(".bird-talk").toggle();
	});
		$("#addItem").click(function(e) {
		e.preventDefault();
		var newItem = $("#make-new-item-box").val();
		$(this).closest("body").find(".list-item-section").prepend('<ul class="white-rec"><img src="file:///Users/summermcdonald/Desktop/Project/Shopping%20List%20App/images/images.jpg" class="white-square"><img src="images/imgres.jpg" class="check-mark"><li class="thing">' + newItem + '</li><button type="remove" class="removeItem">Remove</button></ul>').slideDown("slow");
    	$("#make-new-item-box").val('');
	});

	$(document).on("click", ".removeItem", remove);

	$(document).on("click", ".white-square", showCheck);

	$(document).on("click", ".check-mark", hideCheck);
});

function remove() {
	$(this).closest(".white-rec").slideUp("slow");
}

function showCheck() {
	$(this).closest(".white-rec").find(".check-mark").show();
}

function hideCheck() {
	$(this).hide();
}


