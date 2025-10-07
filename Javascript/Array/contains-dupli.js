var containsDuplicate = function(nums) {
    let set = new Set()
    set.add(nums[0])
    for (let i=1; i< nums.length; i++){
        if (!set.has(nums[i])){
            set.add(nums[i])
        }
        else{
            return true
        }
    }
    return false
};