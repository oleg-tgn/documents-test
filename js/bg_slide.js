'use strict';


$(document).ready(function () { 
    $(window).on("load resize scroll", function (e) {  
        if ($('.section .bg_slide').length > 0) {
            if (window.matchMedia("(min-width: 768px)").matches) {
                $('.section .bg_slide').each(function (e, q) {
                    $(q).css('backgroundImage', 'url(' + $(q).attr('data-src') + ')');
                })
            }
        }

        if ($('.our_labs-c .bg_lab').length > 0) {
            if (window.matchMedia("(min-width: 768px)").matches) {
                $('.our_labs-c .bg_lab').each(function (e, q) {
                    $(q).css('backgroundImage', 'url(' + $(q).attr('data-src') + ')');
                })
            } else {
                $('.our_labs-c .bg_lab').each(function (e, q) {
                    $(q).css('backgroundImage', 'url(' + $(q).attr('data-src-mob') + ')');
                })
            }
        }
    })

    if (window.matchMedia("(min-width: 768px)").matches) {
        $(document).on('mouseover', '.section', function (e) {
            e.preventDefault();
            var t = $(e.target).closest('.on-hover');  
            $('.bg_slide').css('opacity', '0');
            $("#" + t.data("slide")).css('opacity', '1');
            return false;
        }).on('mouseout', '.section', function (e) {
            $(".bg_slide").css('opacity', '0');
        });
    }
});
