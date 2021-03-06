'use strict';
import '../css/main/index.scss';
import 'normalize.css';
// import {addListeners} from './block-animation';
import data from '../data/projects.json';
import createNewElement from './utilities';

/**
 *  
 * @param {*} project 
 */
function createAllElements(project) {
    let els = {};
    els.block = createNewElement('div', {
        'classList': 'block block--primary',
    });
    els.header = createNewElement('h4', {
        'classList': 'block__header',
        'innerHTML': project['title'],
    });
    els.copy = createNewElement('p', {
        'classList': 'block__copy',
        'innerHTML': project['copy'],
    });
    els.button = createNewElement('a', {
        'classList': 'btn',
        'href': project['link'],
        'innerHTML': 'Link to project',
    });
    els.image = (project['image']) ? createNewElement('img', {
        'src': 'img/' + project['image'],
        'classList': 'block__image',
    }) : null;

    return els;
};

/**
 * Adds all elements to the page in the given order.
 * @param {*} els 
 */
function appendElements(els) {
    const container = document.getElementById('projects_container');
    const block = els.block;

    block.appendChild(els.header);
    block.appendChild(els.copy);
    if (els.image) {
        block.appendChild(els.image);
    };
    block.appendChild(els.button);
    container.appendChild(els.block);
}

/**
 * Runs the essential methods to start the page
 */
function init() {
    const projects = data['projects'];
    for (let i = 0; i < projects.length; i++) {
        appendElements(createAllElements(projects[i]));
    }
}

window.onload = init;
