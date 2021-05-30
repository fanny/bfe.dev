// It's also possible to use Array.isArray, this is just a polyfill
function getType(data) {
  return Object.prototype.toString.call(data).split(" ")[1].replace("]", "");
}

function dfs(data, command, prevData, prevKey) {
  const [currentKeyCommand] = Object.keys(command);
  const [nextKeyCommand] = Object.values(command);

  if (currentKeyCommand.startsWith("$")) {
    const action = currentKeyCommand;
    if (action == "$set")
      prevData[prevKey] = nextKeyCommand;
    if (action == "$apply")
      prevData[prevKey] = nextKeyCommand.call(this, prevData[prevKey]);
    if (action == "$merge") {
      if (getType(prevData[prevKey]) !== "Object")
        throw new ("Wrong Type: Object is required");
      prevData[prevKey] = {
        ...prevData[prevKey],
        ...command[currentKeyCommand],
      };
    }

    if (action == "$push") {
      if (getType(data) !== "Array")
        throw new ("Wrong Type: Array is required");
      data.push(...command["$push"]);
    }
    return;
  }

  dfs(
    data[currentKeyCommand],
    command[currentKeyCommand],
    data,
    currentKeyCommand
  );
}

/**
 * @param {any} data
 * @param {Object} command
 */
function update(data, command) {
  const immutableState =
    getType(data) == "Array" ? [...data] : Object.assign({}, data);

  dfs(immutableState, command, null, "");
  return immutableState;
}

const newState = update({ a: { c: 1 } }, { a: { $merge: { c: 3 } } });
console.log(newState);
// [1, 2, 3, 4, 5, 6]
