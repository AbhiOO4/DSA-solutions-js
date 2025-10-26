/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i = 0
    let j = 0
    let res = 0
    if (needle == ""){
        return 0
    }
    while (i < haystack.length){
        if (haystack[i] == needle[j]){
            if (j == 0){
                res = i
            }
            if (j == needle.length-1){
                return res
            }
            j++
        }else{
            if (j > 0){
                i--
            }
            j = 0
        }
        i++
    }
    return -1
};