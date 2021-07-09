/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function isEqual(a, b, cache = new Map()) {
  // your code here
  if(typeof a !== typeof b) 
    return false
  
  if(typeof a !== 'object')
    return a === b

  if(cache.has(a) && cache.get(a) === b) {
    return true
  }
  
  if(Array.isArray(a)) {
    if(a.length !== b.length) {
      return false
    }
  } else {
    const keysA = Reflect.ownKeys(a)
    const keysB = Reflect.ownKeys(b)
    if(keysA.length !== keysB.length) {
      return false
    }
  }

  for (key of Reflect.ownKeys(a)) {
    cache.set(a, b)
    if(!isEqual(a[key], b[key], cache)) {
      return false
    }
  }
  return true
}
