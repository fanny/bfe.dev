/**
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
  let result = 'not-settled'
  return function (...args) {
    if(result === 'not-settled')
      result = func.apply(this, args)
    return result
  }
}
