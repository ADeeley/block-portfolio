'use strict';
import {addListenerToAll} from './utilities';

/**
 * 
 * @param {*} element 
 */
function enterEvent(element) {
    let link = element.target.getElementsByTagName('a')[0];
    let percent = 0;
    let frame = function() {
        if (percent > 100) {
            clearInterval(id);
        } else {
            link.style.height = String(percent += 2) + '%';
        }
    };
    let id = setInterval(frame, 5);
}

/**
 * 
 * @param {*} element 
 */
function exitEvent(element) {
    let link = element.target.getElementsByTagName('a')[0];
    let percent = +link.style['height'].slice(0, -1);
    console.log(percent);
    let frame = function() {
        if (percent <= 0) {
            clearInterval(id);
        } else {
            link.style.height = String(percent -= 2) + '%';
        }
    };
    let id = setInterval(frame, 5);
}

/**
 * Applies a listener to all elements.
 */
export function addListeners() {
    const blocks = document.getElementsByClassName('block');
    addListenerToAll(blocks, 'mouseenter', enterEvent);
    addListenerToAll(blocks, 'mouseleave', exitEvent);
}
