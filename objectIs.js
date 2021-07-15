/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function is(a, b) {
  // your code here
  if(typeof a === 'number' && typeof b === 'number') {
    if(isNaN(a) && isNaN(b))
      return true
    
    if(a === 0 && b === 0 && 1 / a !== 1 / b)
      return false
  }
  
  return a === b
}
