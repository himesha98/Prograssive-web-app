import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'acce0fffb4107a32e8912caea60df431'


export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL,{
        params: {
            q: query,
            units: 'metric',
            APPID : API_KEY,
        }
    });

    return data;
}


