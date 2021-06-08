
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
  const errors = []
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then((data) => {
        resolve(data)
      }).catch((error) => {
        errors[index] = error
        if(index == promises.length - 1)
          reject(new AggregateError(
            'No Promise in Promise.any was resolved', 
            errors
          ))
      })
    })
  }) 
}

console.log(any([Promise.resolve(1)]))
