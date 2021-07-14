
/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  // your code here
  console.log(proto)
  if(typeof proto !== 'object' || proto === null)
    throw new Error('InvalidParameterValue: you should provide an object')

  return Object.setPrototypeOf({}, proto)
}
