/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = []
    let i = 0
    let j = 0
    while ( i < nums1.length && j < nums2.length ){
        if (nums1[i] < nums2[j]){
            merged.push(nums1[i])
            i++
        }
        else{
            merged.push(nums2[j])
            j++
        }
    }
    while ( i < nums1.length ){
        merged.push(nums1[i])
        i++
    }
    while ( j < nums2.length ){
        merged.push(nums2[j])
        j++
    }
    let len = merged.length
    if ( (len)%2 == 0 ){
        return (merged[(len/2)-1] + merged[(len/2 + 1)-1])/2
    }
    else{
        return merged[(len+1)/2 - 1]
    }
};