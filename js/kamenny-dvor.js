if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)){
  $(document).ready(function() {
    $("#lightSlider1").lightSlider({
      item:1
    }); 
  });
  $(document).ready(function() {
    $("#lightSlider2").lightSlider({
      item:1
    }); 
  });
}
else{
  $(document).ready(function() {
    $("#lightSlider1").lightSlider({
      item:3
    }); 
  });
  $(document).ready(function() {
    $("#lightSlider2").lightSlider({
      item:1
    }); 
  });
}


function section(e){
	$('html, body').animate({scrollTop:$(`#section-${e}`).position().top}, 'slow');
}
function sectionMobile(e){
  document.getElementById("menuMobile").style.top = "-200vh";
  document.getElementById("closeMenuMobileIcon").style.display = "none";
  document.getElementById("menuMobileIcon").style.display = "block";
  $('html, body').animate({scrollTop:$(`#section-${e}`).position().top}, 'slow');
}


  

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

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(49.260882, 20.628667),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.roadmap,
        mapTypeControl: false,
        fullscreenControl: false
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function sendEmail() {
  console.log("Odosielam");
  var data = {
    name: $("#fname").val(),
    email: $("#email").val(),
    message: $("#message").val(),
    subject: $("#sub").val(),
  };
  $.ajax({
    type: "POST",
    url: "contact_us.php",
    data: data,
    success: function(){
        console.log("uspesne poslane");
    }
});
}

function openPenzionModal(){
  document.getElementById("penzionModal").style.display = "block";
}
function openHalaModal(){
  document.getElementById("halaModal").style.display = "block";
}
function openPohostinstvoModal(){
  document.getElementById("pohostinstvoModal").style.display = "block";
}
function openSpolModal(){
  document.getElementById("spolModal").style.display = "block";
}

function closeModal() {
  document.getElementById('penzionModal').style.display = "none";
  document.getElementById('halaModal').style.display = "none";
  document.getElementById('pohostinstvoModal').style.display = "none";
  document.getElementById("spolModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);
showSlidesHala(slideIndex);
showSlidesPohostinstvo(slideIndex);
showSlidesSpol(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function plusSlidesHala(n) {
  showSlidesHala(slideIndex += n);
}
function plusSlidesPohostinstvo(n) {
  showSlidesPohostinstvo(slideIndex += n);
}
function plusSlidesSpol(n) {
  showSlidesSpol(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
function showSlidesHala(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesHala");
  var captionText = document.getElementById("captionHala");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
function showSlidesPohostinstvo(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesPohostinstvo");
  var captionText = document.getElementById("captionPohostinstvo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
function showSlidesSpol(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesSpol");
  var captionText = document.getElementById("captionSpol");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


function showMenuMobile(){

  document.getElementById("menuMobile").style.top = "0px";
  document.getElementById("closeMenuMobileIcon").style.display = "block";
  document.getElementById("menuMobileIcon").style.display = "none";
}
function hideMenuMobile(){
  document.getElementById("menuMobile").style.top = "-200vh";
  document.getElementById("closeMenuMobileIcon").style.display = "none";
  document.getElementById("menuMobileIcon").style.display = "block";
}


   
    
   
