
var moveZeroes = function(nums) {
    var left = 0
    var len = nums.length
    while (left < len && nums[left]!=0){
        left++
    }
    var right = left+1
    while (right < len){
        if (nums[right] != 0){
            nums[left] = nums[right]
            nums[right] = 0
            right++
            left++
        }
        else{
            right++
        }
    }
    return nums
};