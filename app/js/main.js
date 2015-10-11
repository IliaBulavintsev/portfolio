$(function() {
	//console.log(' main.js ready');
	
	$('.close_wrapper').on('click', function(event) {
		$('.content_popup').bPopup().close();
		/* Act on the event */
	});

	$('.add_background').on('click', function(event) {
		event.preventDefault();
		$('.content_popup').bPopup({
			speed: 450,
			opacity: 0.5,
            transition: 'slideDown'
		});
		console.log("Call modal popUp");
	});

	$('.nav_menu_link').on('click', function(event) {
		$('.activate').removeClass('activate');
		$(this).addClass('activate');
		console.log("change!");
		/* Act on the event */
	});

	$('.activate').addClass('disable_link');

	$('.input_file').on('change', function(event) {
		//console.log($(this).attr('value'));
		var path = $(this).attr('value');
		var indexPath = path.lastIndexOf('\\');
		path =  path.slice(indexPath+1);		
		$('.add_img').attr('value', path);
		//event.preventDefault();
		/* Act on the event */
	});

	// Add placeholder to IE8
	
});