var removeDuplicates = function(nums) {
    var ptr = 1
    var data = nums[0]
    var len = nums.length
    while (ptr < len){
        if (nums[ptr] == data){
            nums.splice(ptr,1)
            len--
        }
        else{
            data = nums[ptr]
            ptr++
        }
    }
    return len
};

