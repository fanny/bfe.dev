
/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs){
  return function (callback, data) {
    let nextIndex = 0
    const callNextFunction = (data) => {
      if(nextIndex === funcs.length) {
        callback(undefined, data)
        return
      }

      const nextFunction = funcs[nextIndex++]
      nextFunction((error, newData) => {
        if(error)
          callback(error, undefined)
        else
          callNextFunction(newData)
      }, data)
    }

    callNextFunction(data)
  }
}

const asyncTimes2 = (callback, num) => {
  setTimeout(() => callback(null, num * 2), 100)
}

const asyncTimes4 = sequence(
  [
    asyncTimes2,
    asyncTimes2
  ]
)

asyncTimes4((error, data) => {
   console.log(data) // 4
}, 1)
