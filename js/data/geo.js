import { API } from "../api.js"

const geo = async (location = 'Bogota') => {
    // Location
    try {
        let geoData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${API}`);
        let geoResponse = await geoData.json();
        let lat = geoResponse[0].lat; 
        let lon = geoResponse[0].lon;
        let city = geoResponse[0].name;

        return {
            lat,
            lon,
            city
        }
    } catch (e) {
        return false
    }

} 

export { geo }
  
