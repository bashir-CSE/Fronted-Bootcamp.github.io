// custome responsive navbar
const navbar = document.querySelector(".navbar-nav");
const bars = document.querySelector(".fa-bars");
bars.addEventListener("click", () => {
	navbar.classList.toggle("show");
});
//git remote add origin https://github.com/bashir-CSE/FrontedBootcamp.github.io.git FrontedBootcamp.github.io
// mapbox
https: mapboxgl.accessToken =
	"pk.eyJ1IjoiYmFzaGlybWFwIiwiYSI6ImNrcTlkbW9uODAweHIydW11aTF6azExMzAifQ.SZY3jdO-lXjyadYr86pJog";
var map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/mapbox/streets-v11",
	center: [-104.9, 39.7],
	zoom: 9,
});
// AOS
AOS.init({
	duration: 1000,
});
