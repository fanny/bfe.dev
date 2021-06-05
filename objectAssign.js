
/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
  if(!target)
    throw new Error('Empty Object: Target needs to be defined')
  if(typeof target !== 'object') {
    target = Object(target)
  }
  sources.forEach((source) => {
    const descriptors = source ? Object.getOwnPropertyDescriptors(source) : {}    
    Reflect.ownKeys(descriptors).forEach((key) => {
      const targetDescriptor = Object.getOwnPropertyDescriptor(target, key)
      if(targetDescriptor && !targetDescriptor.writable)
        throw new Error(`Non Writable Object: ${key} needs to be writable`)
      if(descriptors[key].enumerable)
        target[key] = source[key]
    })
  })
  return target
}

const target = {}
const a = {
  get b() {
    return 3
  }
}
console.log(objectAssign({}, Object.assign({}, a)))
