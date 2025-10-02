/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = 0
    let orgno = x
    let rem = 0
    while( x > 0 ){
        rem = x%10
        num = num*10 + rem
        x = Math.floor(x/10)
    }
    if ( num == orgno){
        return true
    }
    return false
};