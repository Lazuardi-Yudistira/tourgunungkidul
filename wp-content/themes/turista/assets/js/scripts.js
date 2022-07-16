/*
Author       : Syed Ekram.
Template Name: Viaje - Tour & Travel Agency Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/		
		
		// Active Slick Nav 			
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "&#9660;",
			closedSymbol: "&#9658;" 	
		});	
		
		/*START Home Slider JS*/	
		
		$('.home-slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  adaptiveHeight: true
		});
		
		
		/*START MENU JS*/
			 if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});		  
		/*END MENU JS*/	


		/*START HOME WATER JS*/
		  if (typeof $.fn.ripples == 'function') {
				try {
					$('.ripple').ripples({
						resolution: 500,
						perturbance: 0.01
					});
				} catch (e) {
					$('.error').show().text(e);
				}
			}
		/*END HOME WATER JS*/
		
		/* START COUNTDOWN JS*/
		$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */						
		
		/*START PACKAGE JS*/	
		$("#package-slider").owlCarousel({
			items:3,
			pagination:false,
			navigation:true,
			slideSpeed:1000,
			autoPlay:false,
			responsive:{
				0:{
					items:1,
					
				},
				600:{
					items:1,
					
				},
				1000:{
					items:3,
			
				}
			}
		});
		
		/*END PACKAGE JS*/
			
		
		$('#gallery-slider').slick({
		  dots: false,
		  arrows: false,
		  infinite: false,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
		});
		
		/*END GALLERY JS*/
		
		/*Image Popup*/
		 $('.gallery_enlarge_icon').magnificPopup({
			 type:'image',
			 gallery:{
				enabled:true
			  }
			});
		
		/*START Tour Slider JS*/	
		
		$('.tour_slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  adaptiveHeight: true
		});
		

		  /*START Testimonials LOGO*/
		
		$('#testimonial-slider').owlCarousel({
			items : 3,
			autoplay: true,
			center: true,
			loop: true,
			navText:["<i class='icofont-long-arrow-left'></i>", "<i class='icofont-long-arrow-right'></i>"],
			nav: true,
			dots: false,
			responsive:{
				0:{
					items:1,
					
				},
				600:{
					items:1,
					
				},
				1000:{
					items:3,
			
				}
			}
		});
		
		/*END Testimonials LOGO*/
		
		/*END TESTIMONIAL JS*/
		
		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
			margin: 30,
			autoPlay: 5000, //Set AutoPlay to 3 seconds
			items : 5,
			responsive:{
				0:{
					items:2,
					
				},
				600:{
					items:3,
					
				},
				1000:{
					items:5,
			
				}
			}
		});
		/*END PARTNER LOGO*/
		
	}); 	
	
	
	/*START ANIMATION JS*/
	  AOS.init();
	/*END ANIMATION JS*/	
				
})(jQuery);


  

