/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0
    let len = nums.length
    while (nums[i]!=val && i < len){
        i++
    }
    let j = i + 1
    while (j < len){
        if (nums[j] != val){
            nums[i] = nums[j]
            nums[j] = val
            i++
        }
        j++
    }
    return i
};