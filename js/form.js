// import { handler } from "./functionalities/handler";

const getForm = () => {
    const form = document.querySelector('[data-search-form]');
    form.addEventListener('submit', formHandler)
}

// const formHandler = async (e) => {
//     e.preventDefault();
//     const location = document.querySelector('[data-search-input]').value;
//     localStorage.setItem('city', location);
//     handler(location);
// }

export { getForm }