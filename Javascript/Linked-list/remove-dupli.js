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
    if (head && head.next){
        var ptr = head.next
        var prev = head
        var data = head.val
        while (ptr && ptr.next){
        if (ptr.val == data){
            prev.next = ptr.next
        }
        else{
            data = ptr.val
            prev = ptr
        }
        ptr = ptr.next
        }
        if (ptr.val == data){
            prev.next = ptr.next
        }
    }
    return head
};