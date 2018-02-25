function section(e){
	$('html, body').animate({scrollTop:$(`#section-${e}`).position().top}, 'slow');
}


  $(document).ready(function() {
    $("#lightSlider").lightSlider(); 
  });

$( function() {
    $( "#datefrom" ).datepicker({
    	minDate: 0,
    	altField: "#actualDate"
    });
  } );
$( function() {
    $( "#dateto" ).datepicker({
    	minDate: 1
    });
  } );
