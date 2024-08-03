import { fetchJson } from "./functions/api.js";

try {
    const todos = await fetchJson('https://jsonplaceholder.typicode.com/todos?_limit=5');
    console.log(todos);
} catch (error) {
    createElement('div',{
        class: 'alert alert-danger',
        role: 'alert'
    })
}