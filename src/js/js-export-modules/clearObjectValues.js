export default function clearObjectValues(obj) {
    for (let key in obj) {
        obj[key] = '';
    }
}