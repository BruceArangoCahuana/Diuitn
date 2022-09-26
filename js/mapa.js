document.addEventListener("DOMContentLoaded",listo)



function listo() {
    mapa()
}
//-12.1498814,-77.012949
function mapa() {

    let marker;
    var map = L.map('mapa').setView([-12.1498814,-77.012949], 16);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
    }).addTo(map);

    marker = new L.marker([-12.1498814,-77.012949]).addTo(map)
    marker.bindPopup("Calle B, Cercado de Lima, Santiago de Surco 15063").openPopup()
    
}