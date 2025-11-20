/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let dist = 0
    let j = 0
    while (j!=1){
        j++
    }
    for (let i=j+1; i< nums.length; i++){
        if (nums[i] == 0){
            dist++
        }
        else{
            if (dist < k){
                return false
            }
            dist = 0
        }
    }

    return true
};