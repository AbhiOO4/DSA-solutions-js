/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let pow = Math.log2(n)
    if (pow % 1 == 0 ){
        return true
    }
    return false
};