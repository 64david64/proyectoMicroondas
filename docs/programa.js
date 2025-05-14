var map = L.map('map').setView([4.6279625,-74.0684911], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker=L.marker ([4.6279625,-74.0684911]);
marker.addto(map);

//abrir el archivo GeoJspon 
// Javascript se ejecuta de tal manera que si una linea de códigose demora.
// se pasa a la siguiente sin esperar.
// Esto puede generar problemas cuando se requiere secuencialidad.


async function cargarPuntos(){
var miArchivo= await fetch("microondas.geojson");

// convertir el contenido a json: objeto js

var datos= await miArchivo.json();
for (let i=0; i<20;i++)
console.log (datos["features"][i]);


};

cargarPuntos(),

