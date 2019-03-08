export default function createHeader() {
    const html = `
    <img src="./assets/studioghibli-logo.png" id="logo">
    <h1>Ghibli Film List</h1>
    <nav><a href="/index.html"></a></nav>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}