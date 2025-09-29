/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0
    let len = numbers.length
    let r = len-1
    while ( l < r ){
        let sum = numbers[l] + numbers[r]
        if ( target == sum ){
            return [l+1,r+1]
        }
        else if (sum > target){
            r--
        }
        else{
            l++
        }
    }
};