import loadFilms from './load-film-list.js';

const url = 'https://ghibliapi.herokuapp.com/films';

fetch(url)
    .then(response => response.json())
    .then(results => {loadFilms(results);
    });