/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let index1 = -1
    let index2 = -1
    let l = 0
    let r = nums.length - 1
    while ( l<=r && (index1 == -1 || index2 == -1)){
        if ( nums[l] == target){
            index1 = l
        }
        else{
            l++
        }
        if ( nums[r] == target ){
            index2 = r
        }
        else{
            r--
        }
    }
    return [index1,index2]
};