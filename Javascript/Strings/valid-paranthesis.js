/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let top = -1
    let map = {
        '(':')',
        '[':']',
        '{':'}'
    }
    for (let i of s){
        if (top > -1){
            if (i == map[stack[top]]){
                stack.pop()
                top--
            }
            else{
                stack.push(i)
                top++
            }
        }
        else{
            stack.push(i)
            top++
        }
    }
    if (top == -1){
        return true
    }
    return false
};