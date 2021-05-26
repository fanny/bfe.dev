
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

// This is a builder pattern
// return this works because we have a closure, in the lexical environment of the clojure
// we have the variable el so when we return this we can have access to it

const a = document.createElement('p')
const wrapped = $(a)
wrapped.css('color', '#fff')
 .css('backgroundColor', '#000')
 .css('fontWeight', 'bold')
 
console.log(a.style.color)
console.log(a.style.backgroundColor)
console.log(a.style.fontWeight)
