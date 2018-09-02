import { html, render } from 'https://unpkg.com/lit-html@0.11.0/lit-html.js'

const helloTemplate = (name) => html`<h1>Hello ${name}!</h1>`;
 
const items = [1, 2, 3];
const mapTest = () => html`items = <br/> ${items.map((i) => html`item: ${i}<br/>`)}`;

render(
    html`
        ${mapTest()}<br/><br/>
        ${mapTest()}<br/><br/>
        ${mapTest()}<br/><br/>
        ${mapTest()}<br/><br/>
        ${mapTest()}<br/><br/>
    `, document.getElementById('map'));

