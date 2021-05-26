
/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target){
  let left = 0
  let right = arr.length - 1
  while(left <= right){
    const mid = Math.floor((right - left) / 2)
    
    if(arr[mid] === target)
      return mid
    else if(arr[mid] < target)
      left = mid + 1
    else
      right = mid - 1
  }
  return -1
}

console.log(binarySearch([1], 1))
