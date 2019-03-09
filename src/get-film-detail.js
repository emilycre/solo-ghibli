import createDetailTemplate from './film-detail-template.js';

const detailsList = document.getElementById('film-details');
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const url = `https://ghibliapi.herokuapp.com/films/${id}`;

if(!id) {
    window.location = './';
}

fetch(url)
    .then(response => response.json())
    .then(result => {
        loadFilmDetail(result);
    });

function loadFilmDetail(film) {
    const dom = createDetailTemplate(film);
    detailsList.appendChild(dom);
}