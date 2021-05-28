function html(string, ...keys) {
  return string.map(
    (part, index) => 
      (index < string.length - 1) ? part + keys[index]: part
  ).join('')
}


// render the result from html() into the container
function render(result, container) {
  container.innerHTML = result;
}

const helloTemplate = (name, id, className, age) => html`<div id="${id}" class="${className}">Hello ${name}!<span>${age}</age></div>`
const container = document.createElement('div')
render(helloTemplate('Steve', 'id1', 'class1', 20), container)
console.log(container)
