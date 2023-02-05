const infoData = (response) => {
    const { sys, main, wind, visibility, timezone } = response;
    const { sunrise, sunset } = sys;
    const { humidity, pressure } = main;
    const { speed } = wind;

    const dataSunrise = document.querySelector('[data-sunrise]');
    const dataSunset = document.querySelector('[data-sunset]');
    const dataHumidity = document.querySelector('[data-humidity]');
    const dataWind = document.querySelector('[data-wind]');
    const dataPressure = document.querySelector('[data-pressure]');
    const dataVisibility = document.querySelector('[data-visibility');

    dataSunrise.innerText = toDateTime(sunrise, timezone);
    dataSunset.innerText = toDateTime(sunset, timezone);
    dataHumidity.innerText = humidity + '%';
    dataWind.innerText = parseInt(speed * 3.6) + ' Km/hr'
    dataPressure.innerText = pressure + ' hPa';
    dataVisibility.innerText = visibility / 1000 + ' km';
}

const toDateTime = (s, timezone) => {
    const seconds = s + timezone;
    const result = new Date(seconds * 1000).toISOString().slice(11, 19);

    return result
}


export { infoData }