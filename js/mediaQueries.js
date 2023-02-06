const mediaSize = () => {
    if(window.matchMedia('(min-width: 1000px)').matches) {
        laptopUp();
    }
}

const laptopUp = () => {
    const header = document.querySelector('[data-header]');
    const section = document.querySelector('[data-section]');
    const dataWeather = document.querySelector('[data-weather]');
    const form = document.querySelector('[data-search-form]');
    const dataTable = document.querySelector('[data-table]');
    const changeBtn = document.querySelector('[data-change-btn]');
    
    header.classList.remove('flex-column');
    header.classList.remove('justify-content-around')
    header.classList.add('justify-content-evenly')
    form.classList.remove('w-100');
    form.classList.add('d-flex');
    form.classList.add('gap-2')
    changeBtn.classList.remove('w-100');
    changeBtn.classList.add('width-20');
    section.classList.add('d-flex');
    dataWeather.classList.add('w-50');
    dataTable.classList.add('w-50');
}

export { mediaSize }

