function cloneDeep(data, cache = new Map()) {
  if(!data || typeof data !== 'object') 
    return data
  
  if(cache.has(data)) { // to avoid max depth recursion in circular data types
    return cache.get(data)
  }

  const copy = Array.isArray(data) ? [] : {}
  cache.set(data, copy)

  Reflect.ownKeys(data).forEach(key => {
    copy[key] = cloneDeep(data[key], cache)
  })

  return copy
}

console.log(cloneDeep([1,[2,3],{a:{b:{c:3}, d: 4}}]))
