$(document).ready(function() {
	$("#btn-menu").click(function() {
		$(this).toggleClass("open");
			$("nav").fadeToggle();
	});

	$("ul.tabs li").click(function() {
		var id = $(this).attr("data-id");

		$("ul.tabs li").removeClass("current");
		$(".tab-content").removeClass("current");

		$(this).addClass("current");
		$("#" + id).addClass("current");
	});

	$("#hero-download, #custom-download").click(function() {
		$(".black-overlay").fadeIn();
	});
	
	$(".btn-close").click(function() {
		$(".black-overlay").fadeOut();
	});
});