/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let i= 1
    intervals.sort((a,b) => (a[0]-b[0]))
    let merge = [...intervals[0]]
    let result = []
    while (i < intervals.length){
        if (merge[0] <= intervals[i][1] && merge[1] >= intervals[i][0]){
            merge[0] = Math.min(merge[0], intervals[i][0])
            merge[1] = Math.max(merge[1], intervals[i][1])
        }
        else{
            result.push(merge)
            merge = [...intervals[i]]
        }
        i++
    }

    result.push(merge)
    return result

};