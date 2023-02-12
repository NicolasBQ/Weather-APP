import { API } from "../api";

const current = async (lat, lon) => {
    try {
        // Current Data for a specific location
        let currentData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`);
        let currentResponse = await currentData.json(); 
        
        return {
            currentResponse
        }
    } catch(e) {
        return false
    }


}

export { current }
