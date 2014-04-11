$(document).ready(function() {
	$(".bird-img").click(function() {
		$(this).closest(".top-white-line").find(".bird-talk").toggle();
	});
		$("#addItem").click(function(e) {
		e.preventDefault();
		var newItem = $("#make-new-item-box").val();
		$(this).closest("body").find(".list-item-section").prepend('<ul class="white-rec"><img src="file:///Users/summermcdonald/Desktop/Project/Shopping%20List%20App/images/images.jpg" class="white-square"><img src="images/imgres.jpg" class="check-mark"><li class="thing">' + newItem + '</li><button type="remove" class="removeItem">Remove</button></ul>').slideDown();
		$(function(){
    	$("#make-new-item-box").val('');
		});
	});
	$(".removeItem").click(function() {
		$(this).closest(".white-rec").slideUp();
	});
	$(".white-square").click(function() {
		$(this).closest(".white-rec").find(".check-mark").show();
	});
	$(".check-mark").click(function() {
		$(this).hide();
	});
});


