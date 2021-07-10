
/**
 * @param {any} obj
 * @param {target} target
 * @return {boolean}
 */
function myInstanceOf(obj, target) {
  if(obj == null || obj == undefined || typeof obj !== 'object')
    return false
 
  if(obj.__proto__ == target.prototype)
    return true
  
  return myInstanceOf(obj.__proto__, target)
}

console.log(myInstanceOf(1, Object))
