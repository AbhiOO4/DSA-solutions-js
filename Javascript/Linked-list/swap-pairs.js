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
var swapPairs = function(head) {
    if (head && head.next){
        var dummy = new ListNode(0)
        dummy.next = head
        var prev = dummy
        var current = head
        var after = head
        while (current && current.next){
            after = current.next
            current.next = after.next
            after.next = current
            prev.next = after
            prev = current
            current = current.next
        }
        return dummy.next
    }
    return head
};