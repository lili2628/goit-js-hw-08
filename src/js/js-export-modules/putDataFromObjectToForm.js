export default function putDataFromObjectToForm(form, obj) {
     for (let key in obj) {
            form.elements[key].value = obj[key];
        }
}