var productExceptSelf = function(nums) {
    let i = 0
    let r = nums.length-1
    let pre = 1
    let res = [1]
    while ( i < nums.length-1 ){
        pre *= nums[i]
        res.push(pre)
        i++
    }
    let post = 1
    while ( r >= 0 ){
        res[r] = res[r] * post
        post = post * nums[r]
        r--
    }
    return res
};

