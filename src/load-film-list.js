import makeTemplate from './make-template.js';

const filmList = document.getElementById('film-list');

export default function loadFilms(fakeFilmList) {
    fakeFilmList.forEach(film => {
        const dom = makeTemplate(film);
        filmList.appendChild(dom);
    });
}