import { getForm } from "./form.js";
import { handler } from "./functionalities/handler.js";
import { changeMeasurement } from "./measurement.js";

const appInit = () => {
    handler('Bogota');
    getForm();
    changeMeasurement();
}


document.addEventListener('DOMContentLoaded', appInit);