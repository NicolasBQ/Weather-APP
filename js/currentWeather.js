import { turnMeasurement } from "./measurement.js";
import { infoData } from "./infoTable.js";

const currentDisplay = (city = localStorage.getItem('city'), response = JSON.parse(localStorage.getItem('currentResponse'))) => {
    const currentCity = document.querySelector('[data-current-city]');
    const currentTemp = document.querySelector('[data-current-temp]');
    const currentStatus = document.querySelector('[data-current-status]');
    const currentHighest = document.querySelector('[data-highest-temp]');
    const currentLowest = document.querySelector('[data-lowest-temp]');
    const weatherIcon = document.querySelector('[data-weather-icon]');
    const feelsTemp = document.querySelector('[data-feels-temp]');

    const temp = turnMeasurement(response.main.temp);

    currentCity.innerText = city;
    currentTemp.innerText = temp + '°';
    currentStatus.innerText = response.weather[0].description;
    currentHighest.innerText = turnMeasurement(response.main.temp_max) + '°';
    currentLowest.innerText = turnMeasurement(response.main.temp_min) + '°';
    feelsTemp.innerText = turnMeasurement(response.main.feels_like) + '°';
    weatherIcon.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}@4x.png`

    infoData(response);
}

const handleError = () => {
    const currentCity = document.querySelector('[data-current-city]');
    const currentTemp = document.querySelector('[data-current-temp]');
    const currentStatus = document.querySelector('[data-current-status]');
    const currentHighest = document.querySelector('[data-highest-temp]');
    const currentLowest = document.querySelector('[data-lowest-temp]');
    const weatherIcon = document.querySelector('[data-weather-icon]');
    const feelsTemp = document.querySelector('[data-feels-temp]');

    currentCity.innerText = 'Sorry, the city was not found'
    currentTemp.innerText = ' ';
    currentStatus.innerText = ' ';
    currentHighest.innerText = ' ';
    currentLowest.innerText = ' ';
    weatherIcon.src = '../../assets/error.svg';
    feelsTemp.innerText = ' ';
}




export { currentDisplay, handleError }