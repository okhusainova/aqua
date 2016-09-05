function initMap() {
        var myLatLng = {lat: 44.601526, lng: 42.270338};

        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          scrollwheel: false,
          zoom: 9
        });

        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'Hello World!'
        });
  }

  $(document).ready(function(){
		  $('.head-slider').slick({autoplay: true, arrows: 'false', dots: true});
		  $('.info-slider').slick({autoplay: true, arrows: 'false', dots: true});
		  $('.club__slider').slick({"slidesToShow": 4, arrows: true, centerMode: true, centerPadding: '1px',
			prevArrow: $('.prev'), nextArrow: $('.next')});
		  $('.partners-slider').slick({"slidesToShow": 4, centerPadding: '10px', autoplay: false, arrows: 'false', prevArrow: $('.prev'), nextArrow: $('.next') });


		var touch = $('#touch-menu');
		    var menu = $('.menu');
		 
		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid < 1140 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });


		});
