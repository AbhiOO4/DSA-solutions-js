/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let balanced = true
    function dfs(root){
        if (!root){
            return 0;
        }
        const l = dfs(root.left)
        const r = dfs(root.right)
        if ( (Math.abs(r-l) > 1)  ){
            balanced = false
        }
        return 1 + Math.max(l, r)
    }
    dfs(root)
    return balanced
};