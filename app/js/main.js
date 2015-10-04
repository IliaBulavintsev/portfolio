$(function() {
	console.log(' main.js ready');

	$('.add_background').on('click', function(e) {
		e.preventDefault();
		console.log("Call modal popUp");
		$('.popup_modal').bPopup();
	});
	
});