
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
  const result = []
  let indexTracker = 0
  const modifiedPromises = promises.map((item) => promisify(item))

  return new Promise((resolve, _reject) => {
    if(!modifiedPromises.length)
      resolve([])
    modifiedPromises.forEach((promise, index) => {      
      promise.then((data) => {
        result[index] = {status: 'fulfilled', value: data}
        indexTracker += 1
        if(indexTracker >= modifiedPromises.length)
          resolve(result)
      }).catch((error) => {
        result[index] = {status: 'rejected', reason: error}
        indexTracker += 1
        if(indexTracker >= modifiedPromises.length)
          resolve(result)
      })
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


/*   expect(value).toEqual([
    {status: 'fulfilled', value: 1},
    {status: 'fulfilled', value: 2},
    {status: 'fulfilled', value: 3},
    {status: 'rejected', reason: 'error'}
  ])*/
allSettled([1,2,3,Promise.reject('error')]).then((value) => {
  console.log(value)
})
