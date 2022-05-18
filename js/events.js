$(document).ready(function() {
	$(".eColumn1").on("mouseenter", function() {
		$(".img1").slideUp("slow")
		$(".btn-details").css("bottom", 10.5)
		$(".midText1").show("slow")
		$(".btn-details1").effect("shake")
	});

	$(".eColumn1").on("mouseleave", function() {
		$(".img1").slideDown("slow")
		$(".midText1").hide("slow")
	});


	$(".eColumn2").on("mouseenter", function() {
		$(".img2").slideUp("slow")
		$(".btn-details").css("bottom", 10.5)
		$(".midText2").show("slow")
		$(".btn-details2").effect("shake")
	});

	$(".eColumn2").on("mouseleave", function() {
		$(".img2").slideDown("slow")
		$(".midText2").hide("slow")
	});


	$(".eColumn3").on("mouseenter", function() {
		$(".img3").slideUp("slow")
		$(".btn-details").css("bottom", 10.5)
		$(".midText3").show("slow")
		$(".btn-details3").effect("shake")
	});

	$(".eColumn3").on("mouseleave", function() {
		$(".img3").slideDown("slow")
		$(".midText3").hide("slow")
	});

});