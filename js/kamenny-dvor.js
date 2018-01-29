function section(e){
	$('html, body').animate({scrollTop:$(`#section-${e}`).position().top}, 'slow');
}

$(document).ready(function(){
  $('.atrakcieSlick').slick({
    infinite: false,
  	slidesToShow: 3,
  	slidesToScroll: 3
  });
});