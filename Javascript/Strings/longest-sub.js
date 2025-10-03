/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0
    let right = 0
    let longestStr = 0
    let myset = new Set()
    while ( right < s.length ){
        if ( !myset.has(s[right]) ){
            myset.add(s[right])
            longestStr = Math.max(longestStr, myset.size)
            right++
        }
        else{
            myset.delete(s[left])
            left++
        }
    }
    return longestStr
};