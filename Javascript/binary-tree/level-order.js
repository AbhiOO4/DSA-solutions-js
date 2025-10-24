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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let q = [root]
    let res = []
    while (q[0]){
        let len = q.length
        let level = []
        for (let i=0; i<len; i++){
            const current = q.shift()
            level.push(current.val)
            if (current.left) q.push(current.left)
            if (current.right) q.push(current.right)
        }
        res.push(level)
    }
    return res
    
};