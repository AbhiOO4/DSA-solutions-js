/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {}
    let res = 0
    let max = 0
    let n = nums.length/2
    for (let num of nums){
        map[num] = (map[num] || 0) + 1
        if ( map[num] > max ){
            max = map[num]
            res = num
            if ( max > n ){
                return res
            }
        }
    }
    return res
};