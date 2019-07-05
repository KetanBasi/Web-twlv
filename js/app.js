$(document).foundation();

// Custom
// ====================================
// ====================================

// === Scroll to Top ===
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {$('#return-to-top').fadeOut(200);   // Else fade out the arrow
}});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


// === Search bar ===
(function() {
	var expandableSearch = document.getElementsByClassName('js-expandable-search');
	if(expandableSearch.length > 0) {
		for( var i = 0; i < expandableSearch.length; i++) {
			(function(i){ // if user types in search input, keep the input expanded when focus is lost
				expandableSearch[i].getElementsByClassName('form-control')[0].addEventListener('input', function(event){
					Util.toggleClass(event.target, 'form-control--has-content', event.target.value.length > 0);
				});
			})(i);
		}
	}
}());