(function($){
    'use strict';
		$(document).on("ready turbolinks:load",function() {
			try{
				listo();
				reinicio();
			} catch(err) {console.log(err);}
		});
})(jQuery);

function send_mail(){
  $("form").submit();
  $("#email").val('');
  $("#nombre").val('');
  $("#asunto").val('');
  $("#comment-reply").val('');
}

function reinicio(){
			//Js code for Header Top
			var $menu_fixed = $("#menu-fixed"),
			$clone = $menu_fixed.after($menu_fixed.clone().addClass("clone"));
			$(window).on("scroll", function() {
				var fromTop = $(window).scrollTop();
				$("body").toggleClass("down", (fromTop > 185));
			});


			//Js code for Responsive multiple Munu
			$('.dropdown>.dropdown-menu>.dropdown a.dropdown-toggle').on('click', function(e) {
				var $el = $(this);
				var $parent = $(this).offsetParent(".dropdown-menu");
				$(this).parent("li").toggleClass('open');

				$('.nav li.open').not($(this).parents("li")).removeClass("open");

				return false;
			});

			//js for Light Menu Style
			if($("header").attr("id") == "header-style-two")
			{
						function sticky_relocate() {
							var window_top = $(window).scrollTop();
							var div_top = $('#sticky-anchor').offset().top;
							if (window_top > div_top) {
								$('.mainmenu-area').removeClass('light-menu');
								//This is for when div in top



							} else {
								$('.mainmenu-area').addClass('light-menu');
								//This is for when div in not top
							}
						}

						$(function () {
							$(window).scroll(sticky_relocate);
							sticky_relocate();
						});
			}

			//Js code for search box
/*			$(".first_click").click(function(){
				$(".first_click").hide();
				$(".second_click").css('display','block');

				$(".mainmenu-area").addClass("search_box");
			});
			$(".second_click").click(function(){

				$(".second_click").hide();
				$(".first_click").css('display','block');
				$(".mainmenu-area").removeClass("search_box");

			});

            // Payment Method Select Ammount Js
            $('.fixed-ammount').each(function (i, liList) {

                var $ammount = $(liList);
                $ammount.on('click', 'label', function () {
                    $ammount.find('.select-ammount-buttton').removeClass('select-ammount-buttton');
                    $(this).addClass('select-ammount-buttton');
                });
            });
            $('.donation-form').click(function(e) {

                if ( $(e.target).is('.other-ammount') ) {
                    $(".fixed-ammount label").removeClass("select-ammount-buttton");
                }
            });
*/

            // Progress Bar
            function animateElements() {
                $('.progressbar').each(function () {
                    var elementPos = $(this).offset().top;
                    var topOfWindow = $(window).scrollTop();
                    var percent = $(this).find('.circle').attr('data-percent');
                    var percentage = parseInt(percent, 10) / parseInt(100, 10);
                    var animate = $(this).data('animate');
                    if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {

                        $(this).data('animate', true);
                        $(this).find('.circle').circleProgress({
                            startAngle: -Math.PI / 2,
                            value: percent / 100,
                            thickness: 5,
                            fill: {
                                color: '#F5C200'
                            },
                            emptyFill: '#ECECEC',
                            animation: {
                              duration: 2000,
                              easing: 'easeOutBounce' // Default circleProgressEasing . You can also use jquery Easeing another Effect
                            },
                        }).on('circle-animation-progress', function (event, progress, stepValue) {
                            $(this).find('div').text((stepValue*100).toFixed(0) + "%");
                        }).stop();
                    }
                });
            }
            // Show animated elements
            animateElements();
            $(window).scroll(animateElements);

            // swiper plugin Testimonial Onwe active.
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplay: 2000,
                grabCursor: true,
                loop: true
            });

            // swiper plugin Logo Section active.
            var swiper = new Swiper('.swiper-container-two', {
                slidesPerView: 4,
                paginationClickable: false,
                spaceBetween: 18,
                autoplay: 2000,
                loop: true,
                breakpoints: {
                    // when window width is <= 320px
                    320: {
                      slidesPerView: 1
                    },
                    // when window width is <= 480px
                    480: {
                      slidesPerView: 2
                    },
                    // when window width is <= 640px
                    638: {
                      slidesPerView: 3
                    },
                    // when window width is <= 640px
                    765: {
                      slidesPerView: 3
                    },
                    // when window width is <= 991px
                    991: {
                      slidesPerView: 4
                    }
                  }
            });

            // Masonry For Photo Gallery
            $('.grid').masonry({
              itemSelector: '.grid-item',
              columnWidth: 1,
              percentPosition: true
            });

            // LightCase Active
						setTimeout(function(){
							$('a[data-rel^=lightcase]').lightcase();
						}, 100);

            //ScrollBar Customization
            $('.scrollbox').enscroll();

             //Count down Time js
             $(".event_canvas").TimeCircles({circle_bg_color: "#fff"});
             $(".header-top-right .event_canvas").TimeCircles({circle_bg_color: "#E9E9E9"});


            // nstslider for filtering price
            $('.nstSlider').nstSlider({
                "left_grip_selector": ".leftGrip",
                "right_grip_selector": ".rightGrip",
                "value_bar_selector": ".bar",
                "highlight": {
                    "grip_class": "gripHighlighted",
                    "panel_selector": ".highlightPanel"
                },
                "value_changed_callback": function(cause, leftValue, rightValue) {
                    $('.leftLabel').text(leftValue);
                    $('.rightLabel').text(rightValue);
                },
            });

           // Flex Carousel Active
          $('#flex_carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 74,
            itemMargin: 5,
            asNavFor: '#slider'
          });
          $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#flex_carousel"
          });

            //Breadcrumb Effect
            $(window).scroll(function() {
              var scroll = $(window).scrollTop();
              $(".breadcrumb-area").css({
                "-webkit-filter": "blur(" + (scroll/90) + "px)",
                filter: "blur(" + (scroll/90) + "px)",
                "-webkit-transform": "translateY(" + (scroll*.5) + "%)",
                transform: "translateY(" + (scroll*.5) + "%)"
              });
            });

            //Función para enviar correo
            var correo;
            var nombre;
            var asunto;
            var cuerpo;
            $("#comment-reply").blur(function(){
                correo = $("#email").val();
                nombre = $("#nombre").val();
                asunto = $("#asunto").val();
                nombre = nombre.concat(": ");

                cuerpo = nombre.concat($("#comment-reply").val());
                $("#formCorreo").attr("action", "mailto:trades@colmex.mx?subject="+asunto+"&cc="+correo+"&body="+cuerpo);
                if(correo != '' && nombre != ': ' && cuerpo != ': '){
                  send_mail();
                }
              });
}
function send_mail(){
  $("form").submit();
  $("#email").val('');
  $("#nombre").val('');
  $("#asunto").val('');
  $("#comment-reply").val('');
}

function isotopeMedios(){
				// init Isotope
						var ancho = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
						var $gellary_img = $('.all-gallery-items').isotope({
							masonry: {
								columnWidth: $(".all-gallery-items").width()/(ancho >= 1200 ? 3 : (ancho >= 680 ? 2 : 1))
							},
							itemSelector: '.single-item',
							percentPosition: true,
							transitionDuration: '0.8s',
							getSortData: {
							name: '.name',
							symbol: '.symbol',
							number: '.number parseInt',
							category: '[data-category]',
							weight: function( itemElem ) {
								var weight = $( itemElem ).find('.weight').text();
								return parseFloat( weight.replace( /[\(\)]/g, '') );
							}
							}
						});  

						$(".single-item").width($(".all-gallery-items").width()/(ancho >= 1200 ? 3 : (ancho >= 680 ? 2 : 1))).css({"margin-bottom":"20px"});     
						
						// filter functions
						var filterFns = {
							// show if number is greater than 50
							numberGreaterThan50: function() {
							var number = $(this).find('.number').text();
							return parseInt( number, 10 ) > 50;
							},
							// show if name ends with -ium
							ium: function() {
							var name = $(this).find('.name').text();
							return name.match( /ium$/ );
							}
						};
						
						// bind filter button click
						$('.gallery-menu ul').on( 'click', 'li', function() {
							var filterValue = $( this ).attr('data-filter');
							// use filterFn if matches value
							filterValue = filterFns[ filterValue ] || filterValue;
							$gellary_img.isotope({ filter: filterValue });
						});            

						// Isotop for four grid     
						var $gellary_img_4 = $('.gallery-grid-4').isotope({
							itemSelector: '.single-item-4',
							transitionDuration: '0.8s',
							getSortData: {
							name: '.name',
							symbol: '.symbol',
							number: '.number parseInt',
							category: '[data-category]',
							weight: function( itemElem ) {
								var weight = $( itemElem ).find('.weight').text();
								return parseFloat( weight.replace( /[\(\)]/g, '') );
							}
							}
						}); 
						// bind filter button click
						$('.gallery-menu ul').on( 'click', 'li', function() {
							var filterValue = $( this ).attr('data-filter');
							// use filterFn if matches value
							filterValue = filterFns[ filterValue ] || filterValue;
							$gellary_img_4.isotope({ filter: filterValue });
						});
					
						// change is-checked class on buttons
						$('.gallery-menu ul').each( function( i, liList ) {
							var $liList = $( liList );
							$liList.on( 'click', 'li', function() {
							$liList.find('.is_selected').removeClass('is_selected');
							$( this ).addClass('is_selected');
							});
						});
}
