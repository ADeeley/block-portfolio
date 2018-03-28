/**
 * @param {*} elements HTMLcollection
 * @param {*} event string
 * @param {*} callback function
 */
export function addListenerToAll(elements, event, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, callback);
    }
}
