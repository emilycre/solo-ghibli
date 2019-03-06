import './html-equal.js';
import makeFilmTemplate from '../src/make-template.js';

const test = QUnit.test;

QUnit.module('Film Listing');


test('Film list template matches HTML', function(assert) {
    //arrange
    const html = `
    <li><a href="films.html">Castle In The Sky</a> <span>(1986)</span></li>`;
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