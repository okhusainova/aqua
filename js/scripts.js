$(document).ready(function() {
    $('.js-head-slider').slick({ autoplay: true, arrows: 'false', dots: true });
    $('.js-info-slider').slick({ autoplay: true, arrows: 'false', dots: true });
    $('.js-club-slider').slick({
        "slidesToShow": 4,
        arrows: true,
        centerMode: true,
        centerPadding: '1px',
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.js-partners-slider').slick({
        "slidesToShow": 4,
        autoplay: false,
        arrows: true,
        prevArrow: $('.prevs'),
        nextArrow: $('.nexts'),
        responsive: [{
            breakpoint: 1066,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 840,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 670,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    var touch = $('#touchMenu');
    var menu = $('.menu');

    // $(touch).on('click', function(e) {
    //     e.preventDefault();
    //     menu.slideToggle();
    // });

    $(window).resize(function() {
        var wid = $(window).width();
        if (wid < 1140 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});
