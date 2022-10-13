// Usaremos la IP de un servidor de google como ejemplo
var IP = '74.125.224.72';

// La api de cors-anywhere espera como argument la URL de destino
var CorsAnyWhereUrl = 'https://cors-anywhere.herokuapp.com/';

// La URL de geoplugin que espera la IP de usuario
var GeoPluginUrl =  "http://www.geoplugin.net/json.gp?ip=";

// Hacer llamada usando jQuery
// $.getJSON(CorsAnyWhereUrl + GeoPluginUrl + ip,function(response){
//     console.log(response);
//     // Hola visitante de "Pais"
//     alert("Hola visitante de "+ response.geoplugin_countryName);
// });

// o hacer llamada a geoplugin usando javascript plano
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    var respuesta = this.responseText;
    var response = JSON.parse(respuesta);
    
    if (this.readyState == 4 && this.status == 200) {
        alert("Hola visitante de "+ response.geoplugin_countryName);
    }
};
xhttp.open("GET", CorsAnyWhereUrl + GeoPluginUrl + ip , true);
xhttp.send();