/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1
        let h = n
        let isBad = 1
        while (l<=h){
            mid = Math.floor((l+h)/2)
            if (isBadVersion(mid)){
                h = mid-1
                isBad = mid
            }
            else{
                l = mid+1
            }
        }
        return isBad
    };
};