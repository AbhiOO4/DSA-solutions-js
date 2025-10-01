/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let i = 0
    let minDiff = null
    let closest = 0
    nums.sort((a,b)=> a-b)
    let diff = 0
    while ( i < nums.length - 2){ 
        let l = i+1
        let r = nums.length - 1
        while (l<r){
            let sum = 0
            sum = nums[i] + nums[l] + nums[r]
            if (sum == target){
                return sum
            }
            else if (sum > target){
                diff = sum - target
                r--
            }
            else{
                diff = target - sum
                l++
            }
            if (minDiff){
                if (diff < minDiff){
                    minDiff = diff
                    closest = sum
                }
            }
            else{
                minDiff = diff
                closest = sum
            }
        }
        i++
    }
    return closest
};