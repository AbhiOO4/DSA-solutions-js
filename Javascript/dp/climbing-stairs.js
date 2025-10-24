/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const array = new Array(n+1)
    array[array.length - 1] = 1
    array[array.length - 2] = 1
    let i = array.length - 3
    let one = array.length - 1
    let two = array.length - 2
    while ( i >= 0){
        array[i] = array[one] + array[two]
        one--
        two--
        i--
    }
    return array[0]
};