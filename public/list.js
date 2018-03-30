import { html, render } from 'https://unpkg.com/lit-html@0.9.0/lit-html.js'
import { repeat } from 'https://unpkg.com/lit-html@0.9.0/lib/repeat.js'

const listTemplate = (items) => html`
  <ul>
    ${repeat(items, (i) => i.id, (i, index) => html`
      <li>${index}: ${i.name}</li>`)}
  </ul>
`;

const listExample = [
    {
        id: 'ID 1',
        name: 'Madison'
    },
    {
        id: 'ID 2',
        name: 'Emily'
    },
    {
        id: 'ID 2',
        name: 'Abigail'
    }
]

render(listTemplate(listExample), document.getElementById('list-container'));

const listExample2 = [
    {
        id: 'ID 1',
        name: 'Emma'
    },
    {
        id: 'ID 2',
        name: 'Emily'
    },
    {
        id: 'ID 3',
        name: 'Abigail'
    }
]

setTimeout(function() {
    render(listTemplate(listExample2), document.getElementById('list-container'));
}, 2000);
