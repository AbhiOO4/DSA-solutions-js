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
var oddEvenList = function(head) {
    if (head && head.next){
        var ptr = head
        var d1 = null
        var d2= null
        var index = 0
        while (ptr){
            index++
            if (index % 2 == 0){
                if (!d2){
                    d2 = ptr
                    var ptr2 = d2
                }
                else{
                    ptr2.next = ptr
                    ptr2 = ptr2.next
                }
            }
            else{
                if (!d1){
                    d1 = ptr
                    var ptr1 = d1
                }
                else{
                    ptr1.next = ptr
                    ptr1 = ptr1.next
                }
            }
            ptr = ptr.next
        }
        ptr1.next = d2
        ptr2.next = null
        return d1
    }
    return head
};