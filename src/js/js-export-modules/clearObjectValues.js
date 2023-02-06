export default function clearObjectValues(obj) {
    for (key in obj) {
        obj[key] = '';
    }
}