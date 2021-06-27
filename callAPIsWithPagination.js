// fetchList is provided for you
// const fetchList = (since?: number) => 
//   Promise<{items: Array<{id: number}>}>

// you can change this to generator function if you want
async function fetchListWithAmount (amount = 5) {
  let lastCursor = null;
  const data = [];

  while(data.length < amount){
    const { items } = await fetchList(lastCursor);
    data.push(...items);
    if(items.length == 0)
      break
    lastCursor = items.slice(-1)[0].id
  }

  return data.slice(0, amount)
}
