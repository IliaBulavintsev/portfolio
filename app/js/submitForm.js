var SubmitForm = (function(){

    var init = function(){
        _setupListener();
    };

    var _setupListener  = function(){
        var form = $('.find_form');
        form.on('submit', _submitForm);
    };

    var _submitForm = function(event){
        event.preventDefault();
        var form = $(this),
            url = $(this).attr('action'),
            defObj = _ajaxForm(form , url);

        //Работа с defObj

    };

    var _ajaxForm= function(form, url){

      var data = form.serialize();
        //console.log(form);
      if(!Validation.validateForm(form)){
          //console.log('Error not valid in JS ');
          $($.find('.well_done_mess')).hide();
          $($.find('.somth_wrong_mess')).show();
          return false;
      }else{
          //console.log('JS Valid! going Ajax');
          $($.find('.somth_wrong_mess')).hide();
          $($.find('.well_done_mess')).show();
         // console.log(data);
          var defObj = $.ajax({
              url : url,
              type : 'POST',
              dataType : 'json',
              data : data
          });
      }
      return defObj;

    };


    return {
        init : init

    };

})();

SubmitForm.init();