import { geo } from "../data/geo.js";
import { current } from "../data/current.js";
import { forecast } from "../data/forecast.js";
import { currentDisplay } from "./currentWeather.js";
import { forecastDisplay } from "./forecastWeather.js";

const handler = async (location) => {
    const geoCity = await geo(location);
    if(geoCity) {
        const cityLat = geoCity.lat;
        const cityLon = geoCity.lon;
        const city = geoCity.city;
        const currentWeather = await current(cityLat, cityLon);
        const forecastWeather = await forecast(cityLat, cityLon);
        localStorage.setItem('city', city);
        localStorage.setItem('currentResponse', JSON.stringify(currentWeather.currentResponse));
        currentDisplay(city, currentWeather.currentResponse);
        forecastDisplay(city, forecastWeather.forecastResponse);
    } else {
        console.log('bad info')
    }
}



export { handler }