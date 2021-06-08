class Middleware {

  constructor(){
    this.callbacks = []
    this.errorsHandlers = []
  }
  /**
   * @param {MiddlewareFunc} func
   */
  use(func) {
    if(func.length === 2){
      this.callbacks.push(func)
    } else {
      this.errorsHandlers.push(func)
    }
  }

  /**
   * @param {Request} req
   */
  start(req) {
    let callbackIndex = 0
    let errorsIndex = 0

    const callNextFunction = (error) => {
      const nextFunction = this.callbacks[callbackIndex++]
      try {
        if(error instanceof Error) {
          const nextError = this.errorsHandlers[errorsIndex++]
          nextError && nextError(error, req, callNextFunction) 
        } else {
          nextFunction && nextFunction(req, callNextFunction)
        }
      } catch(error) {
        const nextError = this.errorsHandlers[errorsIndex++]
        nextError && nextError(error, req, callNextFunction)  
      }
    }
    callNextFunction()
  }
}

const req = {}
const middleware = new Middleware()
const error1 = new Error('error')
middleware.use((req, next) => {
  setTimeout(() => {
    req.a = 1
    next()
  }, 100)
})
middleware.use((req, next) => {
  setTimeout(() => {
    req.b = 2
    next(error1)
  }, 10)
})
middleware.use((req, next) => {
  setTimeout(() => {
    req.c = 3
    next()
  }, 20)
})

middleware.use((_error, req, next) => {
  console.log(_error)
  console.log(req)
})
middleware.start(req)
