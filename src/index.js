import loadFilms from './load-film-list.js';
import createHeader from './create-header.js';

const header = document.getElementById('film-header');
const dom = createHeader();
header.appendChild(dom);

const url = 'https://ghibliapi.herokuapp.com/films';

fetch(url)
    .then(response => response.json())
    .then(results => {loadFilms(results);
    });