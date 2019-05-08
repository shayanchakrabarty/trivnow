/*$(document).ready(function() {
			// grab the initial top offset of the navigation 
		   	var stickyNavTop = $('.hdr-inn').offset().top;
		   	
		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
		   	var stickyNav = function(){
			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			         
			    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
			    // otherwise change it back to relative
			    if (scrollTop > stickyNavTop) { 
			        $('.hdr-inn').addClass('sticky');
			    } else {
			        $('.hdr-inn').removeClass('sticky'); 
			    }
			};

			stickyNav();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyNav();
			});
		});*/

 $(document).ready(function() {
 	$('.slick_outer').slick({
 		centerMode: false,
         arrow:true,
         autoplay:false,
         prevArrow: '<button class="slick-prev" aria-label="Next" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
         nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
 		centerPadding: '0px',
 		slidesToShow: 3,
 		responsive: [{
 			breakpoint: 1200,
 			settings: {
 				centerPadding: '0',
 				slidesToShow: 2
 			}
 		}, {
 			breakpoint: 769,
 			settings: {
 				centerPadding: '0',
 				slidesToShow: 1
 			}
 		}]
 	});
 });


$('.venue-slider').slick({
     dots:false,
     arrow:true,
     autoplay:true,
     centerMode: false,
     prevArrow: '<button class="slick-prev" aria-label="Next" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
     nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
     centerPadding: '0',
     slidesToShow: 3,
     slidesToScroll: 1,
     responsive: [
       {
     breakpoint: 992,
     settings: {
       slidesToShow:2
     }
   },
   {
    breakpoint: 601,
     settings: {
       slidesToShow: 1,
     }
   }
 ]
 });


$(document).ready(function () {
$('#horizontalTab').easyResponsiveTabs({
type: 'default', //Types: default, vertical, accordion           
width: 'auto', //auto or any width like 600px
fit: true,   // 100% fit in a container
closed: 'accordion', // Start closed if in accordion view
activate: function(event) { // Callback function if tab is switched
var $tab = $(this);
var $info = $('#tabInfo');
var $name = $('span', $info);
$name.text($tab.text());
$info.show();
}
});

});

!!window['addEventListener'] && new WOW().init();
$(document).ready(function() {
  var maxHeight = 0;

  $(".hhh").each(function() {
    if ($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });

  $(".hhh").height(maxHeight);
});

// $(document).ready(function() {
//   var maxHeight = 0;

//   $(".spec-txt").each(function() {
//     if ($(this).height() > maxHeight) {
//       maxHeight = $(this).height();
//     }
//   });

//   $(".spec-txt").height(maxHeight);
// });
$(document).ready(function() {
  var maxHeight = 0;

  $(".spec-txt ul").each(function() {
    if ($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });

  $(".spec-txt ul").height(maxHeight);
});
// $(document).ready(function() {
//   var maxHeight = 0;

//   $(".spec-txt").each(function() {
//     if ($(this).height() > maxHeight) {
//       maxHeight = $(this).height();
//     }
//   });

//   $(".spec-txt").height(maxHeight);
// });

$(document).ready(function() {
  $(".nav-tabs > li:last-child").click(() => {
    $(".nav-tabs > li:first-child").removeClass("active");
    $(".nav-tabs > li:last-child").addClass("active");
  });

   $(".nav-tabs > li:first-child").click(() => {
     $(".nav-tabs > li:first-child").addClass("active");
     $(".nav-tabs > li:last-child").removeClass("active");
   });
});


