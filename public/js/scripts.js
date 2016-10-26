$(document).ready(function(){

	$('.header-open').on('click', function() {
		$('.sidebar').addClass('is-open');
		$('.header-open').addClass('is-hidden');
	});

	$('.sidebar-close').on('click', function() {
		$('.sidebar').removeClass('is-open');
		$('.header-open').removeClass('is-hidden');
	});

	$('.sidebar-nav-group-title').on('click', function() {
		$('.sidebar-nav-group').removeClass('is-active');
		$('.sidebar-nav-group').children('.sidebar-nav-group-items').slideUp(200, 'easeInOutQuad');

		$(this).parent('.sidebar-nav-group').addClass('is-active');
		$(this).siblings('.sidebar-nav-group-items').slideDown(200, 'easeInOutQuad');

	})

});