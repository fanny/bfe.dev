
function defaultEqual(first, second) {
  return JSON.stringify(first) === JSON.stringify(second)
}

/**
 * @param {Function} func
 * @param {(args: any[], newArgs: any[]) => boolean} [isEqual]
 * @returns {any}
 */
function memoizeOne(func, isEqual = defaultEqual) {
  let lastArgs = null
  let lastReturn = null
  let lastThis = null

  return function (...args) {
    if(lastReturn !== null && isEqual(lastArgs, args) && lastThis === this) {
      return lastReturn
    }
    
    lastArgs = args
    lastReturn = func.call(this, ...args)
    lastThis = this
    return lastReturn
  }
}
