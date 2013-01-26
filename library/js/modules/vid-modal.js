define(
    [
        'jquery',
        'tpl!templates/video-modal.tpl',
        'bootstrap-modal'
    ],
    function(
        $,
        tplVideoModal
    ){

        return function(els){

            $(document).on('click', els, function(e){

                var $this = $(this)
                    ,$video = $this
                    ,modal = $this.data('modal')
                    ;

                e.preventDefault();

                if (!modal){

                    modal = $(tplVideoModal.render({

                        title: $video.find('.video-title').text(),
                        ytid: $video.data('ytid')

                    })).modal().on('hidden', function () {
                        
                        // detach it when closed so video stops
                        $(this).detach();
                    });

                    $this.data('modal', modal);

                } else {

                    modal.appendTo('body').modal('show');
                }
            });
        }
    }
);