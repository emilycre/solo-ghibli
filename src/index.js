import makeTemplate from './make-template.js';
import fakeFilmList from '../data/short-film-list.js';

const filmList = document.getElementById('film-list');

function loadFilms(fakeFilmList) {
    fakeFilmList.forEach(film => {
        const dom = makeTemplate(film);
        filmList.appendChild(dom);
    });
}

loadFilms(fakeFilmList);