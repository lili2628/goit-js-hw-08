export default function clearObjectValues(object) {
    for (key in object) {
        object[key] = '';
    }
}