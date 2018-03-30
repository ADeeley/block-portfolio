/**
 * @param {HTMLcollection} elements
 * @param {String} event
 * @param {Function} callback
 */
function addListenerToAll(elements, event, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, callback, false);
    }
}

/**
 * @param {String} tagName Tag name
 * @param {Object} config Object containing the attributes to set
 * @return {Object} The configured object
 */
export default function createNewElement(tagName, config) {
    let element = document.createElement(tagName);

    for (const attr in config) {
        if (config.hasOwnProperty(attr)) {
            element[attr] = config[attr];
        }
    }

    return element;
}
