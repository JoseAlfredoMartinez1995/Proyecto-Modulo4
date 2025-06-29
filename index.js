async function getClima(ciudad, miBusqueda, miLabel)
{
    let url = 'http://api.weatherstack.com/current?access_key=ef17450f3a8b9e108f9e8592ef69df8a&query=' + ciudad;

    try
    {
        await axios.get(url).then((result) => {
            console.log(result.data.current);

            let datos = "Nombre: " + result.data.location.name + '\n';

            datos += "Pais: " + result.data.location.country + '\n';
            datos += "Temperatura: " + result.data.current.temperature + "°C\n";
            datos += "Clima: " + result.data.current.weather_descriptions[0] + '\n';
            datos += "Humedad: " + result.data.current.humidity + "%\n";

            miLabel.innerText = datos;
        });
    }
    catch
    {
        miLabel.innerText = "Error en petición, revise su conexión a internet o la ortografía de su búsqueda";
    }

    miBusqueda.value = "Mexico city";
    
}

/* -------------------- main --------------------*/

const entradaCiudad = document.getElementById('ciudad');
const botonBuscar = document.getElementById('buscar');
const salidaClima = document.getElementById('clima');

console.log(entradaCiudad.value)

botonBuscar.addEventListener('click', () => getClima(entradaCiudad.value, entradaCiudad, salidaClima));