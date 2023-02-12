// import { getForm } from "form.js";
// import { handler } from "functionalities/handler.js";
// import { changeMeasurement } from "measurement.js";
import { mediaSize } from "mediaQueries.js";

const appInit = () => {
    alert('SSi');   
    mediaSize();
    // handler('Bogota');
    // getForm();
    // changeMeasurement();
}


document.addEventListener('DOMContentLoaded', appInit);