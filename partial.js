
function mergeArgs(firstArgs, secondArgs){
  let secondIndex = 0;
  let result = []
  
  firstArgs.forEach((element) => {
    if(element === partial.placeholder) {
      result.push(secondArgs[secondIndex++])
    }else{
      result.push(element)
    }
  })

  return result.concat(secondArgs.slice(secondIndex))
}

/**
 * @param {Function} func
 * @param {any[]} args
 * @returns {Function}
 */
function partial(func, ...args) {
  return function (...remainingArgs) {
    return func.call(this, ...mergeArgs(args, remainingArgs))
  }
}

partial.placeholder = '_'


const func = (...args) => args
const _ = partial.placeholder
const func1_3 = partial(func, 1, _, 3)
console.log(func1_3(2,4))
