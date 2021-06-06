
// WeakMap or Map it's probably better
/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver = (a, b) => [a, b].join('_')) {
  const cache = {}
  return function (...args) {
    const key = resolver(...args)
    if(cache[key]){
      return cache[key]
    } else {
      cache[key] = func.apply(this, args)
      return cache[key]
    }
  }
}
