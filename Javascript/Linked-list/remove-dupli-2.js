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
var deleteDuplicates = function(head) {
    var dummy = new ListNode(0)
    dummy.next = head
    if (head && head.next){
        var prev = dummy
        var current = head
        var ptr = head.next
        var data = head.val
        while (ptr){
            if (ptr.val == data){
                prev.next = ptr.next
            }
            else{
                data = ptr.val
                current = ptr
                if (prev.next != current){
                    prev = prev.next
                }
            }
            ptr = ptr.next
        }
    }
    return dummy.next
};