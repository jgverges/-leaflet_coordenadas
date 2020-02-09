// Mapa centrado en pza Cataluña
var mymap = L.map('map').setView([41.3873669,2.1678501], 16);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoiamd2ZXJnZXMiLCJhIjoiY2s2NjhhMW9zMDRtNDNubm9neHR5bXl1YSJ9.AW-ITTXyoQdPltu620Izwg'
}).addTo(mymap);

// marcador en c Balmes 16
var marker = L.marker([41.3868561, 2.1661102]).addTo(mymap);
marker.bindPopup("<b>c Balmes 16</b><br>Bcn.").openPopup();

