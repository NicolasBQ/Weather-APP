import { geo } from "./data/geo.js";
import { current } from "./data/current.js";
import { forecast } from "./data/forecast.js";

const appInit = () => {
    loadData();
    getForm();
}

const loadData = async () => {
    let geoD = await geo();
    // let currentD = await current();
    // let forecastD = await forecast();
}

const getForm = () => {
    const form = document.querySelector('[data-search-form]');
    
    form.addEventListener('submit', formHandler)
}

const formHandler = async (e) => {
    e.preventDefault();
    const location = document.querySelector('[data-search-input]').value;

    const geoCity = await geo(location);
    if(geoCity) {
        const cityLat = geoCity.lat;
        const cityLon = geoCity.lon;
        const city = geoCity.city;
        const currentWeather = await current(cityLat, cityLon);
        displayCurrentWeather(city, currentWeather.currentResponse);
    } else {
        console.log('bad info')
    }
}

const displayCurrentWeather = (city, response) => {
    const currentCity = document.querySelector('[data-current-city]');
    const currentTemp = document.querySelector('[data-current-temp]');
    const currentStatus = document.querySelector('[data-current-status]');
    const currentHighest = document.querySelector('[data-highest-temp]');
    const currentLowest = document.querySelector('[data-lowest-temp]');

    const temp = Math.round(turnToC(response.main.temp));
    console.log(response);

    currentCity.innerText = city;
    currentTemp.innerText = temp + '°';
    currentStatus.innerText = response.weather[0].description;
    currentHighest.innerText = Math.round(turnToC(response.main.temp_max));
    currentLowest.innerText = Math.round(turnToC(response.main.temp_min));

}

const turnToC = (temp) => temp - 273.15;


document.addEventListener('DOMContentLoaded', appInit);