/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head){
        var dummy = new ListNode(0)
        dummy.next = head
        var prev = dummy
        var current = head
        while (current){
            if (current.val == val){
                prev.next = current.next
            }
            else{
                prev = prev.next
            }
            current = current.next
        }
        return dummy.next
    }
    return head
};