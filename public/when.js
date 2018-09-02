import { html, render } from 'https://unpkg.com/lit-html@0.11.0/lit-html.js'
import { when } from 'https://unpkg.com/lit-html@0.11.0/directives/when.js'

let checked = false;

var style = html`
  <style>
    button {
      font-size: 20pt;
    }
    img {
      height: 400px;
      width: 400px;
    }
  </style>
`;

function pageSwitch(p) {
  checked = p;
  renderView();
}

var page1 = html`
  <div>
    ${style}
    <img src="large2.jpg" />
    <button @click=${(e) => pageSwitch(false)}>Page1</button>
  </div>
`;

var page2 = html`
  <div>
    ${style}
    <img src="large.jpg" />
    <button @click=${(e) => pageSwitch(true)}>Page2</button>
  </div>
`;

function renderView() {
  render(html`${
    when(checked, 
      () => html`${page1}`, 
      () => html`${page2}`
    )
  }`, document.getElementById('page'));
}

renderView();
