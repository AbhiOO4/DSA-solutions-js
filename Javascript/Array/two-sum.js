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

//less time complexity in O(n) time using hashmap

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashmap = {}; 
    let i =0
    let len = nums.length
    while (i < len){
        let diff = target - nums[i]
        if (diff in hashmap){
            return [hashmap[diff], i]
        }
        hashmap[nums[i]] = i
        i++
    }
};
