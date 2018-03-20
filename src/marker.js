const mapbox = require("mapbox-gl");

mapbox.accessToken = 'pk.eyJ1IjoieWFrdWJvdmE5MiIsImEiOiJjamV6dHJjYTcwZjE4MndubnJiazE2cTNyIn0.tHbarGVvITCNjGItAaeYiw';

const iconURLs = {
    home: "url(https://image.flaticon.com/icons/svg/780/780291.svg)",
    hotel: "url(https://image.flaticon.com/icons/svg/235/235813.svg)",
    restaurant: "url(https://image.flaticon.com/icons/svg/235/235830.svg)",
    activity: "url(https://image.flaticon.com/icons/svg/235/235861.svg)"
};



const buildMarker = function (type, coords) {
  const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "32px";
markerDomEl.style.backgroundImage = iconURLs[type];
return new mapbox.Marker(markerDomEl).setLngLat(coords);
    // new mapboxgl.Marker(type).setLngLat(coords).addTo(map);
};

module.exports = buildMarker;
