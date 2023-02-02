/**
 * fn-cases
 */

const fnCases = (arr, bool = false) => {
    arr = arr.map(item => [JSON.stringify(item[0]), JSON.stringify(item[1])])
    const TOTAL_CASES = arr.length;
    const solved = arr.every(fn => fn[0] === fn[1])

    if (bool) return solved

    if (solved) {
        return console.log(`All test passed: (${TOTAL_CASES}/${TOTAL_CASES})`)
    } else {
        let caseFail = 0
        arr.map((fn, idx) => {
            if (fn[0] !== fn[1]) {
                caseFail++
                return console.log(`Test case ${idx + 1} fail`)
            }
        })
        console.log(`(${TOTAL_CASES - caseFail}/${TOTAL_CASES}) test cases passed`)
    }
}

module.exports = fnCases