(function($){

    /** Trigger AOS  **/
    AOS.init();

    // handle links with @href started with '#' only
    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top;
        //$("body").addClass("scrolling");


        // animated top scrolling
        $('body, html').animate({scrollTop: pos}, 400, function(){
            //$("body").removeClass("scrolling");
        });
    });

    
    var slider = tns({
        container: '#slider1',
        items: 1,
        autoHeight: true
    });
    var slider = tns({
        container: '#slider2',
        items: 1,
        autoHeight: true
    });

    
}(jQuery));