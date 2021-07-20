
// copied from lib.es5.d.ts
declare interface Array<T> {
  myReduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
  myReduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
  myReduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U
}

Array.prototype.myReduce = function (...args: any[]) {
  const hasInitialValue = (args.length > 1)
  if(this.length === 0 && args.length === 1){
    throw new Error('Empty Array')
  }
  const callbackFn = args[0]
  let result = hasInitialValue ? args[1]: this[0] 
  
  // your code here
  this.forEach((element, index, array) => { 
    if(!hasInitialValue && index == 0)
      return
    result = callbackFn(result, element, index, array)
  })

  return result
}

const arr = [1,2,3,4,5,6].reverse()
const reducer = (a, b) => a - b
console.log(arr.myReduce(reducer))
