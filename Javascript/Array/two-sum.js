/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var sum = 0
    var i = 0 
    var j = 1
    var size = nums.length
    while (i < (size-1)){
        sum = nums[i]+nums[j]
        if (sum == target){
            var arr = [i,j]
            return arr
        }
        j++
        if (j == nums.length){
            i++
            j = i+1
        }
    }
};