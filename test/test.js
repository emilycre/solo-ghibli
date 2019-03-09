import './html-equal.js';
import makeFilmTemplate from '../src/make-template.js';
import createDetailTemplate from '../src/film-detail-template.js';

const test = QUnit.test;

QUnit.module('Film Templates');

test('Film list template matches HTML', function(assert) {
    //arrange
    const film = {
        title: 'Castle In The Sky',
        release_date: '1986',
        id: '123'
    };
    //act
    const result = makeFilmTemplate(film);
    
    //assert
    assert.htmlEqual(result, `
    <li><a href="films.html?id=123">Castle In The Sky</a> <span>(1986)</span></li>`);
});

test('Template to populate with film details', assert => {
    //arrange
    const film = {
        id: '12345',
        title: 'Castle In The Sky',
        description: 'The orphan Sheeta inherited a mysterious...', 
        director: 'Hayao Miyazaki',
        producer: 'Isao Takahata',
        release_date: '1986',
        rt_score: '95'
    };

    //act
    const result = createDetailTemplate(film);

    //assert
    assert.htmlEqual(result, /*html*/`
    <dl>
            <dt>Film Title :</dt>
            <dd id="title">Castle In The Sky</dd>
            <dt>Synopsis :</dt>
            <dd id="synopsis">The orphan Sheeta inherited a mysterious...</dd>
            <dt>Director :</dt>
            <dd id="director">Hayao Miyazaki</dd>
            <dt>Producer :</dt>
            <dd id="producer">Isao Takahata</dd>
            <dt>Release Date :</dt>
            <dd id="release-date">1986</dd>
            <dt>Rotten Tomato Score :</dt>
            <dd id="rt-score">95</dd>
        </dl>
        `);
});