var search = function(nums, target) {
    let l = 0
    let r = nums.length - 1
    while (l<=r){
        let mid = Math.floor((l + r)/2)
        console.log(mid)
        if (nums[mid] < target){
            l = mid+1
        }
        else if( nums[mid] > target){
            r = mid-1
        }
        else{
            return mid
        }
    }
    return -1  
};

let nums = [5]

console.log(search(nums, 5))