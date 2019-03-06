import fakeFilmList from '../data/short-film-list.js';
import createDetailTemplate from '../src/film-detail-template/js';

const detailsList = document.getElementById('film-details');
const searchParams = new URLSearchParams(window.location.search);
const selectedFilm = searchParams.get('id');
let populateFilmDetail = null;

for(let i = 0; i < fakeFilmList.length; i++) {
    let currentFilm = fakeFilmList[i];
    if(currentFilm.id === selectedFilm.id) {
        populateFilmDetail = selectedFilm;
    }
}

const dom = createDetailTemplate(populateFilmDetail);
detailsList.appendChild(dom);