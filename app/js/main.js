$(function() {
	console.log(' main.js ready');
	
	PopUpHide();
	
	$('.close_wrapper').bind('click', function(event) {
		PopUpHide();
		/* Act on the event */
	});

	//$('.popup').on('click', function(event) {
	//	PopUpHide();
		/* Act on the event */
	//});
	
	$('.add_background').bind('click', function(e) {
		//e.preventDefault();
		//$('#popup_modal').bPopup();
		PopUpShow();
		console.log("Call modal popUp");
	});

	$('.nav_menu_link').on('click', function(event) {
		$('.activate').removeClass('activate');
		$(this).addClass('activate');
		console.log("change!");
		/* Act on the event */
	});

	$('.activate').addClass('disable_link');

	$('.input_file[name]').on('change()', function(event) {
		console.log($);
		//event.preventDefault();
		/* Act on the event */
	});
	
});

function PopUpHide(){
	$(".popup").fadeOut("slow");
	console.log("popUp hide");
}
function PopUpShow(){
	$(".popup").fadeIn("slow");
}
