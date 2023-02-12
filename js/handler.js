import { geo } from "./geo.js";
import { current } from "./current.js"
import { currentDisplay, handleError } from "./currentWeather.js";

const handler = async (location) => {
    showLoader();
    const geoCity = await geo(location);
    if(geoCity) {
        const cityLat = geoCity.lat;
        const cityLon = geoCity.lon;
        const city = geoCity.city;
        const currentWeather = await current(cityLat, cityLon);
        localStorage.setItem('city', city);
        localStorage.setItem('currentResponse', JSON.stringify(currentWeather.currentResponse));
        currentDisplay(city, currentWeather.currentResponse);
        hideLoader();
    } else {
        handleError();
        hideLoader();
    }
}

const showLoader = () => {
    const loader = document.getElementById('loader');
    loader.classList.add('show')
}

const hideLoader = () => {
    const loader = document.getElementById('loader');
    loader.classList.remove('show')
}


export { handler }