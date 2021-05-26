/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
	return (x) => funcs.reduce((acc, current) => current(acc), x)
}
