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

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);



const marker = buildMarker("activity", [-74.509151, 40.005086]); // or [-87.6354, 41.8885]
marker.addTo(map);
