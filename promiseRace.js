
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then((value) => resolve(value))
        .catch((error) => reject(error))
    })
  })
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
