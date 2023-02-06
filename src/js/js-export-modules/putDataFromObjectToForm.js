export default function putDataFromObjectToForm(form, object) {
     for (key in object) {
            form.elements[key].value = object[key];
        }
}