let map = L.map('map').setView([69.473434, 38.019561], 5);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'OpenStreetMap'
}).addTo(map);









let LeafIcon = L.Icon.extend({
  options: {
      iconSize:     [40, 40],
      iconAnchor:   [20, 40],
      popupAnchor:  [0, -40]
  }
});




let shipIcon = new LeafIcon({iconUrl: './img/ship.svg'});

let flagIcon = new LeafIcon({iconUrl: './img/flag1.svg'});

let churchIcon = new LeafIcon({iconUrl: './img/church.svg'});

let rudderIcon = new LeafIcon({iconUrl: './img/rudder.svg'});




//СЂРµРєРё, РјР°СЂРєРµСЂС‹

//Р‘РџРЈ

