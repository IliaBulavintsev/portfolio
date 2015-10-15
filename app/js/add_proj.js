var AddProj = (function(){
    var init = function(){
        _setupListener();

    };

    var _setupListener = function(){
        $('.close_wrapper').on('click', _close_bpopup);
        $('.add_background').on('click', _init_bpopup);
        $('.input_file').on('change', _input_file);

    };

    var _close_bpopup =  function(event) {
        var form = $.find('form');
        var input_image= $.find('.add_img');
        $('.content_popup').bPopup().close();
        $(form).trigger('reset');
        $(input_image).attr('value', '');
        /* Act on the event */
    };

    var _init_bpopup = function(event) {
        var form = $.find('form');
        var input_image= $.find('.add_img');
        event.preventDefault();
        $('.content_popup').bPopup({
            speed: 0,
            opacity: 0.5,
            transition: 'slideDown',
            positionStyle: 'fixed',
            onClose: function(){
                $(form).trigger('reset');
                $(input_image).attr('value', '');
            }
        });
        console.log("Call modal popUp");
    };

    var _input_file = function(event) {
        //console.log($(this).attr('value'));
        var path = $(this).attr('value');
        var indexPath = path.lastIndexOf('\\');
        path =  path.slice(indexPath+1);
        $('.add_img').attr('value', path);
        //event.preventDefault();
        /* Act on the event */
    };

    return {
        init : init
    };

})();

AddProj.init();
