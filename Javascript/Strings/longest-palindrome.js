/**
 * @param {string} s
 * @return {string}
 */


var longestPalindrome = function(s) {
    let res = ''
    let maxLen = 0
    let i = 0
    let resL = 0
    let resR = 0
    while (i < s.length){
        let l =i
        let r= i
        while (l>=0 && r < s.length && s[l]==s[r]){
            if ((r-l +1) > maxLen){
                maxLen = r-l + 1
                resL = l
                resR = r+1
            }
            l--
            r++
        }
        l = i
        r = i+1
        while (l>=0 && r < s.length && s[l]==s[r]){
            if ((r-l +1) > maxLen){
                maxLen = r-l + 1
                resL = l
                resR = r+1
            }
            l--
            r++
        }
        i++
    }
    return s.slice(resL , resR)
};