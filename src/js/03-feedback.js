import throttle from 'lodash.throttle';
import putDataFromObjectToForm from '../js/js-export-modules/putDataFromObjectToForm';

const FORM_STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
let formData = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY)) || {};

formEl.addEventListener('input', throttle(onInputForm, 500));
formEl.addEventListener('submit', onFormSubmit);

populateFormData();

function onInputForm (e) {
    formData[e.target.name] = e.target.value;

    const formDataString = JSON.stringify(formData);

    localStorage.setItem(FORM_STORAGE_KEY, formDataString);
}

function onFormSubmit (e) {
    e.preventDefault();

    if (formEl.elements.email.value === '' || formEl.elements.message.value === '') {
        alert('Для відправлення форми необхідно заповнити всі поля вводу!')
    } else {
        e.currentTarget.reset();
        localStorage.removeItem(FORM_STORAGE_KEY);
        console.log(formData);
    
        formData = {};
    }
}

function populateFormData() {
    const savedFormData = localStorage.getItem(FORM_STORAGE_KEY);

    if (savedFormData) {
        const savedFormDataParce = JSON.parse(savedFormData);
    
        putDataFromObjectToForm(formEl, savedFormDataParce);
    }
}
