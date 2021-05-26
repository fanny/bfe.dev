
/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  return {
    css: function (propertyName, value) {
      el.style[propertyName] = value
      return this
    }
  }
}

const a = document.createElement('p')
const wrapped = $(a)
wrapped.css('color', '#fff')
 .css('backgroundColor', '#000')
 .css('fontWeight', 'bold')
 
console.log(a.style.color)
console.log(a.style.backgroundColor)
console.log(a.style.fontWeight)
