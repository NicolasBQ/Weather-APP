import { API } from "./api.js";

const appInit = () => {
    loadData();
}

const loadData = async () => {
    // Location
    let geoData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&appid=${API}`);
    let geoResponse = await geoData.json();
    let lat = geoResponse[0].lat; 
    let lon = geoResponse[0].lon;

    // Current Data for a specific location
    let currentData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`);
    let currentResponse = await currentData.json();

    // Forecast
    let forecastData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}`);
    let forecastResponse = await forecastData.json();

}


document.addEventListener('DOMContentLoaded', appInit);