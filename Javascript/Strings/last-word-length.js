var lengthOfLastWord = function(s) {
    let j = s.length-1

    while ( s[j] == " " && j>=0 ){
        j--
    }

    if (j < 0){
        return 0
    }

    let i = j
    let count = 0
    while (s[i] != " " && i >= 0){
        i--
        count++
    }
    return count
};