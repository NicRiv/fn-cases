/**
 * fn-cases
 */

const fnCases = (arr) => {
    arr = arr.slice(0)
    const newArr = arr.map(item => [JSON.stringify(item[0]), JSON.stringify(item[1])])
    const TOTAL_CASES = newArr.length;

    const solved = newArr.every(fn => fn[0] === fn[1])

    if (solved) {
        return console.log(`All test passed: (${TOTAL_CASES}/${TOTAL_CASES})`)
    } else {
        newArr.map((fn, idx) => {
            if (fn[0] !== fn[1]) {
                return console.log(`Test case ${idx + 1} fail.`)
            }
        })
    }
}

module.exports = fnCases