function merge(args, newArgs, placeholder) {
  let lastIndex = -1
  const newArray = args.slice()
  
  newArgs.forEach((newArg) => {
    lastIndex = newArray.indexOf(placeholder, lastIndex + 1)
    if(lastIndex != -1 && newArg !== placeholder){
      newArray[lastIndex] = newArg
    } else if(newArg !== placeholder) {
      newArray.push(newArg)
    }
  })
  return newArray
}

function countArgs(args, placeholder) {
  return args.slice(0, 3).filter((arg) => (arg != placeholder)).length
}

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function helper(...args){
    if(fn.length <= countArgs(args, curry.placeholder)){
      return fn.apply(this, args)
    } else {
      return (...newArgs) => {
        return helper(...merge(args, newArgs, curry.placeholder))
      }
    }
  }
}

(_, 2)(1, 3)

const  join = (a, b, c) => {
  return `${a}_${b}_${c}`
}



// curriedJoin(_, 2)(1, 3) // '1_2_3'

// curriedJoin(1, _)(2, 3) // 

// curriedJoin(_, _, _)(1)(_, 3)(2) 

// curriedJoin(_, _, _)(_)(1, 3)(2) 


const curriedJoin = curry(join)
curry.placeholder = Symbol()
const _ = curry.placeholder
