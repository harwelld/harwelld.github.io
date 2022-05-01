// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000);
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Define modal variables
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal7 = document.getElementById("modal7");
var modal8 = document.getElementById("modal8");

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
	if (event.target == modal1) {
		modal1.style.display = "none";
	}
	if (event.target == modal2) {
		modal2.style.display = "none";
	}
	if (event.target == modal3) {
		modal3.style.display = "none";
	}
	if (event.target == modal7) {
		modal7.style.display = "none";
	}
	if (event.target == modal8) {
		modal8.style.display = "none";
	}
})

// MapBox API location map centered on Grand Junction
mapboxgl.accessToken = 'pk.eyJ1IjoiaGFyd2VsbGQiLCJhIjoiY2pscHg1aGJtMjk4dzNwczY0dnpzenRkbiJ9.q_MbeY9ltMWtycZuo9FfUw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [-122.678, 45.513],
  zoom: 10,
});

map.addControl(new mapboxgl.NavigationControl());
