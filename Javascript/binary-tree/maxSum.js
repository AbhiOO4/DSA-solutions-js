
const maxSum = (root) => {
    if ( !root ){
        return -Infinity;
    }
    return root.value + Math.max(maxSum(root.left),maxSum(root.left))
}
