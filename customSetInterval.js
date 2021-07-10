class MyCustomInterval {
  constructor () {
    this.timeoutMap = new Map()
  }

  setInterval(func, delay, period){
    let count = 0
    const outerId = window.setTimeout(() => run(), delay + period * count++)

    const run = () => {
      func()
      const nestedId = window.setTimeout(run, delay + period * count++)
      this.timeoutMap.set(outerId, nestedId)
    }

    return outerId
  }


  clearInterval(id) {
    window.clearTimeout(id)
    if(this.timeoutMap.has(id)){
      window.clearTimeout(this.timeoutMap.get(id))
      this.timeoutMap.delete(id)
    }
  }
}

const customInterval = new MyCustomInterval()

/**
 * @param {Function} func
 * @param {number} delay
 * @param {number} period
 * @return {number}
 */
function mySetInterval(func, delay, period) {
  return customInterval.setInterval(func, delay, period)
}

/**
 * @param { number } id
 */
function myClearInterval(id) {
  customInterval.clearInterval(id)
}
