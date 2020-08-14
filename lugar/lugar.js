const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodeURL = encodeURI(dir);
    console.log(encodeURL);

    const resp = await axios.get(`https://geocode.xyz/?locate=location?city=${encodeURL}&auth=21362756431980832467x7064&json=1`);

    if(resp.data.error){
        throw new Error(`No hay resultados para el lugar ${dir}`);
    }

    const data = resp.data;

    const direccion = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}