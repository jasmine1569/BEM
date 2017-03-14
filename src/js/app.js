

$('.js-trigger').on('click', function () {
	$('this').toggleClass('nav__trigger--active');
	$('.js-nav').slideToggle('fast');
});