/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    s = s.replace(/[^a-zA-Z0-9]/g,"")
    let l = 0
    let r = s.length-1
    while ( l < r){
        if (s[l] !== s[r]){
            return false
        }
        l++
        r--
    }
    return true

};