import { API } from "../api.js"
import { geo } from "./geo.js"

const forecast = async () => {
    const geoD = await geo();
    const lat = geoD.lat;
    const lon = geoD.lon;
    // Forecast
    let forecastData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}`);
    let forecastResponse = await forecastData.json();

    return {
        forecastResponse
    }
}

export { forecast }