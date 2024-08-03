/**
 * 
 * @param {string} tagName 
 * @param {object} attributes 
 * @return {HTMElement}
 */
export function createElement(tagName, attributes = {}){
    const element = document.createElement(tagName)
    for (const [key, value] of Object.entries(attributes)) {
        console.log(`${key}: ${value}`);
        element.setAttribute(key, value)
    }
    return element
}