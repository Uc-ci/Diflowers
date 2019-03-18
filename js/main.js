// Google Maps Script

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 61.251964, lng: 73.400098};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'),{
      	zoom: 17, 
       	center: uluru,
       	styles: [{"featureType": "poi.attraction",
 "stylers": [{"visibility": "off"}]},
  {"featureType": "poi.business",
   "stylers": [{"visibility": "off"}]},
    {"featureType": "poi.government",
     "stylers": [{"visibility": "off"}]},
      {"featureType": "poi.medical",
		 "stylers": [{"visibility": "off"}]},
		  {"featureType": "poi.place_of_worship",
		   "stylers": [{"visibility": "off"}]},
		    {"featureType": "poi.school ",
		    " stylers ": [{" visibility ":" off "}]},
		     {" featureType ":" poi.sports_complex ",
		     " stylers ": [{" visibility ":" off "}]}]
       });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
  	position: uluru, 
  	map: map,
  	icon: 'img/icon-maps.svg'
  });
}

// Parallax Effect 

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

// Sticky Header Navigation 

   $(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('.js-navigaition').addClass('sticky');
    }
    else
    {
      $('.js-navigaition').removeClass('sticky');
    }
})

// Popup feedback

  let 
      popup = document.getElementById('popup'),
      popupToggle = document.getElementById('window__button'),
      popupClose = document.querySelector('.js-window__close'),
      popupExit = document.querySelector('.js__reviews');

      popupToggle.onclick = function() {
        popup.style.transform="translateX(0px)";
      };

      popupClose.onclick = function () {
        popup.style.transform="translateX(-3000px)";
      };

      window.onclick = function (e) {
        if(e.target == popupExit) {
          popup.style.transform="translateX(-3000px)";
        
        };
      };

// Mobile Menu

  let 
    menu = document.getElementById('information-menu'),
    menuOpen = document.querySelector('.js-icon-hambuger'),
    menuClose = document.querySelector('.js-inforamtion-close');

    menuOpen.onclick = function() {
      menu.style.right="0";
    };

    menuClose.onclick = function() {
      menu.style.right="-100%";
    };  

