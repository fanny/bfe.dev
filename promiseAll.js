
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  const result = []
  let indexTracker = 0
  const modifiedPromises = promises.map((item) => promisify(item))

  return new Promise((resolve, reject) => {
    if(!modifiedPromises.length)
      resolve([])
    modifiedPromises.forEach((promise, index) => {      
      promise.then((data) => {
        if(indexTracker == modifiedPromises.length - 1)
          resolve(result)
        result[index] = data
        indexTracker += 1
      }).catch((error) => reject(error))
    })
  })
}

function promisify(data) {
  if (data instanceof Promise)
    return data

  return new Promise((resolve, reject) => {
    if(data) {
      resolve(data)
    }
    reject(new Error('Invalid Argument: Missing Data'))
  })
}

all([]).then((value) => {
  console.log(value)
})
