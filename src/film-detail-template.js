export default function createDetailTemplate(film) {
    const html = `
    <dl>
        <dt>Film Title</dt>
        <dd id="title">${film.title}</dd>
        <dt>Synopsis</dt>
        <dd id="synopsis">${film.description}</dd>
        <dt>Director</dt>
        <dd id="director">${film.director}</dd>
        <dt>Producer</dt>
        <dd id="producer">${film.producer}</dd>
        <dt>Release Date</dt>
        <dd id="release-date">${film.release_date}</dd>
        <dt>Rotten Tomato Score</dt>
        <dd id="rt-score">${film.rt_score}</dd>

    </dl>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}