import throttle from 'lodash.throttle';
import putDataFromObjectToForm from '../js/js-export-modules/putDataFromObjectToForm';
import clearObjectValues from '../js/js-export-modules/clearObjectValues';

const FORM_STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const formData = {};

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

    e.currentTarget.reset();
    localStorage.removeItem(FORM_STORAGE_KEY);
    console.log(formData);
    
    clearObjectValues(formData);
}

function populateFormData() {
    const savedFormData = localStorage.getItem(FORM_STORAGE_KEY);

    if (savedFormData) {
        const savedFormDataParce = JSON.parse(savedFormData);
    
        putDataFromObjectToForm(formEl, savedFormDataParce);
    }
}



