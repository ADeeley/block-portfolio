'use strict';
import '../css/main/index.scss';
import 'normalize.css';
// import {addListeners} from './block-animation';
import data from '../data/projects.json';

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
        let header = document.createElement('h4');
            header.classList = 'block__header';
            header.innerHTML = project['title'];
        let copy = document.createElement('p');
            copy.classList = 'block__copy';
            copy.innerHTML = project['copy'];
        let button = document.createElement('button');
            button.classList = 'btn';
            button.href = project['link'];
            button.innerHTML = 'Link to project';
    

        block.appendChild(header);
        block.appendChild(copy);
        block.appendChild(button);
        container.appendChild(block);
    }
};
