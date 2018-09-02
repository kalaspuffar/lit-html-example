import { html, render } from 'https://unpkg.com/lit-html@0.11.0/lit-html.js'
import { asyncAppend } from 'https://unpkg.com/lit-html@0.11.0/directives/async-append.js'
import { asyncReplace } from 'https://unpkg.com/lit-html@0.11.0/directives/async-replace.js'

const wait = (t) => new Promise((resolve) => setTimeout(resolve, t));

/**
 * Returns an async iterable that yields increasing integers.
 */
async function* countUp() {
  let i = 0;
  while (true) {
    yield i++;
    await wait(1000);
  }
}

render(html`
  Count: <span>${asyncReplace(countUp())}</span>.
`, document.getElementById('replace'));

render(html`
  Count: <span>${asyncAppend(countUp())}</span>.
`, document.getElementById('append'));
