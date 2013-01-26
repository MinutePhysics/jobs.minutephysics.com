define(
    [
        'jquery',
        'modules/vid-modal',
        'jquery-validate'
    ],  
    function( 
        $,
        vidModal
    ) {
            
        var Mediator = {

            init: function (){

                var self = this;

                $(function(){
                    self.onDomReady();
                });
            },

            onDomReady: function(){

                var self = this;

                vidModal('.vid-links a');

                $('#ss-form').validate({
                    highlight: function(element, errorClass) {

                        $(element).parents('.control-group').addClass('error').removeClass('success');
                    },
                    validClass: 'success',
                    success: function(label){
                        
                        label.parents('.control-group').removeClass('error').addClass('success')
                    },
                    errorPlacement: function(error, element){

                        element.after(error.addClass('help-inline'));
                    }
                });
            }

        };

        Mediator.init();
    }
);
