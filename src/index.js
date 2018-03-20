console.log("Hello from JavaScript");

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoieWFrdWJvdmE5MiIsImEiOiJjamV6dHJjYTcwZjE4MndubnJiazE2cTNyIn0.tHbarGVvITCNjGItAaeYiw';


const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/yakubova92/cjezu6na43kzm2urujom1e5ck' // mapbox has lots of different map styles available.
});

// style: 'mapbox://styles/mapbox/light-v9'

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);




buildMarker("home", [-74.009, 40.705]).addTo(map); // or [-87.6354, 41.8885]
// marker.addTo(map);
buildMarker("activity", [-73.998552, 40.714008]).addTo(map); //chinatown fun center
buildMarker("activity", [-73.977622, 40.761433]).addTo(map); //museum of modern art
buildMarker("activity", [-73.990964, 40.733317]).addTo(map); //strand bookstore
buildMarker("activity", [-74.0445, 40.689249]).addTo(map); //statue of liberty
buildMarker("activity", [-73.851666, 40.747151]).addTo(map); //hall of science museum
buildMarker("activity", [-73.985758, 40.748541]).addTo(map); //empire state building
buildMarker("activity", [-73.845062, 40.746384]).addTo(map); //unisphere
buildMarker("restaurant", [-73.851666, 40.726622]).addTo(map); //stix
buildMarker("restaurant", [-73.851666, 40.726622]).addTo(map); //mile end
buildMarker("restaurant", [-73.896733, 40.705414]).addTo(map); //las margaritas
buildMarker("restaurant", [-73.915778, 40.772775]).addTo(map); //bohemian hall and beer garden
buildMarker("restaurant", [-73.986404, 40.757194]).addTo(map); //bubba gump shrimp
buildMarker("restaurant", [-73.973505, 40.751119]).addTo(map); //sushi yasuda
buildMarker("restaurant", [-73.829057, 40.759373]).addTo(map); //new world mall food court
buildMarker("restaurant", [-73.911748, 40.767557]).addTo(map); //egyptian coffee shop
buildMarker("hotel", [-73.981577, 40.769061]).addTo(map); //trump international hotel and tower
buildMarker("hotel", [-73.899913, 40.741278]).addTo(map); //queens hotel
buildMarker("hotel", [-74.009137, 40.712923]).addTo(map); //four seasons hotel downtown


