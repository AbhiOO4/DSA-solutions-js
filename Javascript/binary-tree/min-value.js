
const minValue = (root) => {
    if (!root){
        return Infinity
    }
    return Math.min(root.value, minValue(root.left), minValue(root.r))

}