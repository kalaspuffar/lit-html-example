import { html, render } from 'https://unpkg.com/lit-html@0.9.0/lit-html.js'
import { until } from 'https://unpkg.com/lit-html@0.9.0/lib/until.js'

const renderWhenDone = (imgUrl) => html`
  <p>
    ${until(
        new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = () => 
                resolve(html`<img width="400" height="400" src="${imgUrl}" />`)
            img.onerror = reject
            img.src = imgUrl
        }),
        html`<span>Loading...</span>`)}
  </p>
`;
render(renderWhenDone('large.jpg'), document.body);
