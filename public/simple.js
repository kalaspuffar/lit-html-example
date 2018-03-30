import { html, render } from 'https://unpkg.com/lit-html@0.9.0/lit-html.js'

const helloTemplate = (name) => html`<h1>Hello ${name}!</h1>`;
 
render(helloTemplate('Emily'), document.getElementById('part1'));
render(helloTemplate('Emma'), document.getElementById('part2'));
render(helloTemplate('Hannah'), document.getElementById('part3'));
render(helloTemplate('Olivia'), document.getElementById('part4'));

setTimeout(function() {
    render(helloTemplate('Madison'), document.getElementById('part1'));
    render(helloTemplate('Abigail'), document.getElementById('part2'));
    render(helloTemplate('Isabella'), document.getElementById('part3'));
    render(helloTemplate('Ashley'), document.getElementById('part4'));    
}, 2000);
