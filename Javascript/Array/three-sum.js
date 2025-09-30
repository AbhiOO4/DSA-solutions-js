/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let i = 0
    let result = []
    while ( i < (nums.length-2)){
        if (i > 0 && nums[i] == nums[i-1]){
            i++
            continue;
        }
        let l = i+1
        let r = nums.length-1
        while (l < r){
            let sum = 0
            sum = nums[i] + nums[l] + nums[r]
            if (sum == 0){
                let array = [nums[i], nums[l], nums[r]]
                result.push(array)
                l++
                r--
                while ( nums[l] == nums[l-1] && l < r ){
                    l++
                }
            }
            else if (sum > 0){
                r--
            }
            else{
                l++
            }
        }
        i++
    }
    return result
};