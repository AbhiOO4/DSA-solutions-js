var maxArea = function(height) {
    var l = 0
    var len = height.length
    var r = len-1
    var max = 0
    while (l<r){
        min = Math.min(height[l],height[r])
        dist = r - l
        area = min * dist
        if (area > max){
            max = area
        }
        if (min == height[l]){
            l++
        }
        else{
            r--
        }
    }
    return max
};

