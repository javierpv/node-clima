const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima'

    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(err => console.log(err.message));

// clima.getClima(40.68908, -73.95861)
//     .then(console.log)
//     .catch(err => console.log('ERROR!!', err));

const getInfo = async (direccion) => {

    try {
        const dir = await lugar.getLugarLatLng(direccion);
        const clm = await clima.getClima(dir.lat, dir.lng);
        return `El clima de ${dir.direccion} es de ${clm} grados`;
    } catch (e) {
        return `No se pudo obtener el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

