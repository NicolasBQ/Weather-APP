import { API } from "../api.js"

const forecast = async (lat, lon) => {
    try {
        // Forecast
        let forecastData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}`);
        let forecastResponse = await forecastData.json();

        return {
            forecastResponse
        }
    } catch(e) {
        return false
    }

}

export { forecast }