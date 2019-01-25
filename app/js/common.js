$(function() {

	// Custom JS

	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
			center: true,
   	 	items: 1,
			loop: true,
			dots: true,
			dotsContainer: '#carousel-custom-dots',
			startPosition: randomPosition()
		});
		//$(this).index()
		$('.owl-dot').click(function(){$(".owl-carousel").trigger('to.owl.carousel', [$(this).index(), 300]);});
		//Random index generator
		function randomPosition(){
		var r_hb = $('#carousel-custom-dots li').length;
		var randomize = null;
		
		
		randomize=1
		
		
		if (randomize != 0) {
		return (Math.floor(Math.random()* r_hb));
		}
		else { return 0 ;}
		}

	});

});

