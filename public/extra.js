import { html, render } from 'https://unpkg.com/lit-html@0.9.0/lit-html.js'
import { svg } from 'https://unpkg.com/lit-html@0.9.0/lib/lit-extended.js'

const items = [1, 2, 3];
const mapTest = () => html`items = <br/> ${items.map((i) => html`item: ${i}<br/>`)}`;

render(mapTest(), document.getElementById('map'));

const title = 'Test';
const header = html`<h1>${title}</h1>`;
const fullpage = () => html`
  ${header}
  <p>And the body</p>
`;

render(fullpage('Testing'), document.getElementById('nested'));
