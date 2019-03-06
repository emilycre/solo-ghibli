export default function makeFilmTemplate(film) {
    const html = `
    <li><a href="films.html?id=${film.id}">${film.title}</a> <span>(${film.release_date})</span></li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}