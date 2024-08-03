import { fetchJson } from "./functions/api.js";
import { createElement } from "./functions/dom.js";

try {
    const todos = await fetchJson('https://jsonplaceholder.typicode.com/todos?_limit=5');
    console.log(todos);
} catch (error) {
    const div = createElement('div', {
        class: 'alert alert-danger',
        role: 'alert'
    })
    div.innerText = 'Impossible de charger les éléments'
}