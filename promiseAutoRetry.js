
/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  const autoRetryFetcher = (count) => {
    return fetcher()
      .then((data) => {
        return Promise.resolve(data)
      })
      .catch((error) => {
        if(count === 0)
          return Promise.reject(error)
        return autoRetryFetcher(count - 1)
      })
  }

  return autoRetryFetcher(maximumRetryCount)
}

let callCount = 0
let fetcher = () => new Promise((resolve, reject) => {
  callCount += 1
  reject('error')
})
fetchWithAutoRetry(fetcher, 6)
.then((data) => console.log('aaa', data))
.catch((error) => {
  console.log(callCount)
  console.log(error)
})
