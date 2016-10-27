$(document).ready(function(){

	// Open sidebar
	$('.header-open').on('click', function(e) {
		e.preventDefault();

		$('.sidebar').addClass('is-open');
		$('.header-open').addClass('is-hidden');
		$('.container').removeClass('is-full');
	});

	// Close sidebar
	$('.sidebar-close').on('click', function(e) {
		e.preventDefault();

		$('.sidebar').removeClass('is-open');
		$('.header-open').removeClass('is-hidden');
		$('.container').addClass('is-full');
	});

	// Open sidebar navigation group
	$('.sidebar-nav-group-title').on('click', function(e) {
		e.preventDefault();

		$('.sidebar-nav-group').removeClass('is-active');
		$('.sidebar-nav-group').children('.sidebar-nav-group-items').slideUp(200, 'easeInOutQuad');

		$(this).parent('.sidebar-nav-group').addClass('is-active');
		$(this).siblings('.sidebar-nav-group-items').slideDown(200, 'easeInOutQuad');
	});

	// Toggle sidebar user nav
	$('.sidebar-user').on('click', function(e) {
		e.preventDefault();
		$('.sidebar-user-nav').toggleClass('is-open').slideToggle(200, 'easeInOutQuad');
	});

	// Sticky the page nav
	var elementOffset = $('.page-nav').offset().top;

	$(document).on('scroll', function() {
		var scrollTop = $(window).scrollTop();

		if (scrollTop > elementOffset) {
			$('.page-nav').addClass('is-fixed');
		} else {
			$('.page-nav').removeClass('is-fixed');
		}

	});

});