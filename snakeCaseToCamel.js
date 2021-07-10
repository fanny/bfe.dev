function replacer(_match, group1, group2) {
  return `${group1}${group2.toUpperCase()}`
}
/**
 * @param {string} str
 * @return {string}
 */
function snakeToCamel(str) {
  return str.replace(/([^_])_([^_])/g, replacer) // I'm just getting the character before the underscore and the character after ir
}

console.log(snakeToCamel("snake_case"))
