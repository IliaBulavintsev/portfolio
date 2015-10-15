var Validation = (function(){
    var init = function(){
        _setupListener();
    };

    var _setupListener = function(){
        $('form').on('keydown' , '.qtip_border', _removeError);
        $('form').on('reset', _resetForm);
        $('.input_file').on('change', _removeErrorFile);
    };

    //Remove error
    var _removeError = function(){
        $(this).removeClass('qtip_border');
    };

    var _removeErrorFile = function(){
        var form = $.find('.add_img');
        $(form).trigger('hideTooltip');
        $(form).removeClass('qtip_border');
    };

    //Reset Form
    var _resetForm = function(){
        var form = $(this);
        form.find('input , textarea').trigger('hideTooltip');
        form.find('.qtip_border').removeClass('qtip_border');
    };

    //Check forms
    var validateForm = function(form){
        //event.preventDefault();
        var elements = form.find('input , textarea').not('input[type="file"], input[type="hidden"], input[type="submit"], input[type="reset"]'),
            valid = true;

        $.each(elements , function(index, value){
            //console.log(index);
            //console.log(value);
            if($(value).val().length === 0){
              // console.log('Create Qtip->go');
               // _createQtip(value);
                //$(value).addClass('..qtip_border');
                _createQtip(value);
                $(value).addClass('qtip_border');
               valid = false;
            }
        });
        return valid;
    };

    //create Qtip
    var _createQtip = function(element){
       // console.log("i m creating qtip")
        var element = $(element),
            text = element.attr('qtip-content'),
            position = element.attr('qtip-position');

        if (position === 'right'){
            position = {
                my : 'Center Left',
                at : 'Center Right',
                adjust: {
                    x: 5
                }
            }
        }else{
            position = {
                my : 'Center Right',
                at : 'Center Left',
                adjust: {
                    x: -5
                }
            }
        }

        element.qtip({
            content :{
                text : text
            },
            show : {
                event : 'show'
            },
            hide : {
                event : 'keydown hideTooltip'
            },
            position : position,

            style : {
                classes: 'qtip-rounded qtip_style',
                tip: {
                    //background-color: 'qtip-tip element',
                    width: 10,
                    height: 5,
                    border: 0
                }
            }
        }).trigger('show');

    };

    return {
        init : init,
        validateForm : validateForm
    };

})();

Validation.init();