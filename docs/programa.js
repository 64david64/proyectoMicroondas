var map = L.map('map').setView([51.505, -0.09], 13);

L.titlelayer(""), {
    maxZoom:19, 
    attribution:""

}

var marker=L.marker ([51.505, -0.09]);
marker.addto(map);

//abrir el archivo GeoJspon 
// Javascript se ejecuta de tal manera que si una linea de códigose demora.
// se pasa a la siguiente sin esperar.
// Esto puede generar problemas cuando se requiere secuencialidad.


async function cargarPuntos(){
var miArchivo= await fetch("microondas.geojson");

// convertir el contenido a json: objeto js

var datos= await miArchivo.json();

console.log (datos);
console.log (datos["features"][0]);


};

cargarPuntos(),
