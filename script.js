// $(document).ready(function(){
// 	$(".item").magnificPopup({
// 		type: 'image',
// 		gallery:{
// 			enabled : true
// 		},
// 		removalDelay: 300,
// 		mainClass: 'mfp-fade'
// 	});
// }); 

$(document).ready(function() {
	$('.item').magnificPopup({
		// delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
	$('.sl').slick({
		// autoplay: true,
		// autoplaySpeed: 10000,
		speed: 600,
		zIndex: 0,
		asNavFor: '.sl2',

  });

  $('.sl2').slick({
		dots: true,
		zIndex: 0,
		asNavFor: '.sl',
		focusOnSelect: true,
		slidesToShow: 5,
		arrows: false,
		centerMode: true,
		centerPadding: '40px',
		responsive: [
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 3,
			}
		}
		]

  });
});