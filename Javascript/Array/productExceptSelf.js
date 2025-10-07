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
    console.log(res)
    while ( r >= 0 ){
        console.log(post)
        res[r] = res[r] * post
        post = post * nums[r]
        r--
    }
    return res
};

nums = [1,2,3,4]

console.log(productExceptSelf(nums))