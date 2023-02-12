import { currentDisplay } from "functionalities/currentWeather.js";

let measurement = 'C';

const changeMeasurement = () => {
    const changeBtn = document.querySelector('[data-change-btn]');
    const centigrade = document.querySelector('[data-centigrade]');
    const farenheit = document.querySelector('[data-farenheit]');
    const location = localStorage.getItem('city');

    changeBtn.addEventListener('click', () => {
        if(measurement == 'C') {
            measurement = 'F'
            centigrade.classList.remove('f-bold');
            farenheit.classList.add('f-bold');
        } else {
            measurement = 'C';
            farenheit.classList.remove('f-bold');
            centigrade.classList.add('f-bold');
        }

        currentDisplay();
    })
}

const turnMeasurement = (temp) => {
    if(measurement == 'C') {
        return Math.round(temp - 273.15)
    }

    if(measurement == 'F') {
        return Math.round((temp - 273.15) * 9/5 + 32);
    }
}


export {
    changeMeasurement,
    turnMeasurement
}