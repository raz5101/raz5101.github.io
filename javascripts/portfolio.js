$(document).ready(function(){
	
	$('.profile-photo').removeClass('hidden');
	
	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	});

	$('body').scrollspy({target: '#myNavbar'});

	$('#inputEmail').validate();

	$('.send-email').click(function(){
		alert('No message has been sent.  This feature is currently disabled');
	});

	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  			var target = $(this.hash);
  			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  			if (target.length) {
    			$('html, body').animate({
      				scrollTop: target.offset().top
				}, 1000);
    		return false;
  			}
		}
	});
});
