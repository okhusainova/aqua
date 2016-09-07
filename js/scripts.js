$(document).ready(function() {
    $('.head-slider').slick({ autoplay: true, arrows: 'false', dots: true });
    $('.info-slider').slick({ autoplay: true, arrows: 'false', dots: true });
    $('.club__slider').slick({
        "slidesToShow": 4,
        arrows: true,
        centerMode: true,
        centerPadding: '1px',
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
    $('.partners-slider').slick({
        "slidesToShow": 4,
        autoplay: false,
        arrows: true,
        prevArrow: $('.prevs'),
        nextArrow: $('.nexts')
    });



    var touch = $('#touch-menu');
    var menu = $('.menu');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function() {
        var wid = $(window).width();
        if (wid < 1140 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});
