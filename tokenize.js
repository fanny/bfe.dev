
/**
 * @param {string} str
 * @return {Generator}
 */
function* tokenize(str) {
  const tokens = str.replace(/[^\d]/g, (match) => ` ${match} `) // get all characters that aren't digits
                    .replace(/(\s+)/g, ' ')
                    .split(' ')
                    .filter((token) => token != '')

  for (let token of tokens) {
    yield token 
  }
}
