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
var deleteMiddle = function(head) {
    var slow = head
    var fast = head
    var prev = head
    if (!head.next){
        head = null
    }
    else{
        while (fast && fast.next){
        prev = slow
        slow = slow.next
        fast = fast.next.next
        }
        prev.next = slow.next
    }
    return head
};