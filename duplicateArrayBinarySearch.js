/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function lastIndex(arr, target){
  let left = 0
  let right = arr.length - 1
  let lastIndex = -1
  while(left <= right){
    const mid = Math.floor((right + left) / 2)
    
    if(arr[mid] === target) {
      lastIndex = mid
      left = mid + 1
    }
    else if(arr[mid] < target)
      left = mid + 1
    else
      right = mid - 1
  }
  return lastIndex
}

console.log(lastIndex([1, 2, 3, 3, 4, 5], 3))
