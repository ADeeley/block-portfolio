'use strict';
import '../css/main/index.scss';
import 'normalize.css';
// import {addListeners} from './block-animation';
import data from '../data/projects.json';
import createNewElement from './utilities';

console.log(data);
window.onload = () => {
    const container = document.getElementById('projects_container');
    const projects = data['projects'];
    for (let i = 0; i < projects.length; i++) {
        let project = projects[i];
        let block = document.createElement('div');
            block.classList = 'block block--primary';
            if ((i + 1) % 3 === 0) {
                block.classList += ' block--double';
            }
        let header = createNewElement('h4', {
            'classList': 'block__header',
            'innerHTML': project['title'],
        });
        let copy = createNewElement('p', {
            'classList': 'block__copy',
            'innerHTML': project['copy'],
        });
        let button = createNewElement('button', {
            'classList': 'btn',
            'href': project['link'],
            'innerHTML': 'Link to project',
        });
        let image = (project['image']) ? createNewElement('img', {
            'src': 'img/' + project['image'],
            'classList': 'block__image',
        }) : null;

        block.appendChild(header);
        block.appendChild(copy);
        if (image) {
            block.appendChild(image);
        };
        block.appendChild(button);
        container.appendChild(block);
    }
};
