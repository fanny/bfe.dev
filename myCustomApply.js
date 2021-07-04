
Function.prototype.mycall = function(thisArg, ...args) {
  const funcKey = Symbol() // unique key, to avoid collisions
  if(!thisArg) {
    return this(...args)
  }

  thisArg = Object(thisArg) // when we received a primitive type, we use constructor wrappers.
  thisArg[funcKey] = this // create a hidden property
  const result = thisArg[funcKey](...args)
  delete thisArg[funcKey]
  return result
}

// It's easier to modify the object to include a function, rather than 
// change the function to delegate its property to the custom this
