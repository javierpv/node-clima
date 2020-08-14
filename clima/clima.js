const axios = require('axios');

const getClima = async (lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4a2b0015394865bab7e79cdda684fcd8
    &units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}