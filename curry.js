
/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function helper(...args){
    if(fn.length <= args.length){
      return fn.apply(this, args)
    } else {
      return helper.bind(this, ...args)
    }
  }
}

const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)

console.log(curriedJoin(1, 2, 3)) // '1_2_3'

console.log(curriedJoin(1)(2, 3)) // '1_2_3'

console.log(curriedJoin(1, 2)(3)) 
