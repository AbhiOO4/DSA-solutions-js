/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    if (head){
        let before = head
        let current = head.next
        let after = head.next
        head.next = null
        while (after != null){
            after = current.next
            current.next = before
            before = current
            current = after
        }
        head = before
        return head
    }
    else{
        return null
    }
    
};