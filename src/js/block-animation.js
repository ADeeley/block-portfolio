'use strict';
import {addListenerToAll} from './utilities';

function log() {
    console.log('test')
};
/**
 * Applies a listener to all elements.
 */
export function addHoverListener() {
    const blocks = document.getElementsByClassName('section-title');
    addListenerToAll(blocks, 'click', log);
}
