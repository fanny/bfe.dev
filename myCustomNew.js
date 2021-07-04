/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
const myNew = (constructor, ...args) => {
  const customThis = Object.create(constructor.prototype)
  const newObject = constructor.apply(customThis, args)

  return newObject? newObject: customThis
}


function BigFrontEnd(name) {
  this.name = name
}

BigFrontEnd.prototype.code = function() { }
BigFrontEnd.prototype.answer = function() { }
BigFrontEnd.prototype.design = function() { }

const obj = myNew(BigFrontEnd, 'dev') 
console.log(obj.name)
console.log(obj.code)
console.log(obj.answer)
console.log(obj.design)
console.log(Object.getPrototypeOf(obj))
