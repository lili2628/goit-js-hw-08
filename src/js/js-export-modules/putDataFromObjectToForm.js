export default function putDataFromObjectToForm(form, obj) {
     for (key in obj) {
            form.elements[key].value = obj[key];
        }
}