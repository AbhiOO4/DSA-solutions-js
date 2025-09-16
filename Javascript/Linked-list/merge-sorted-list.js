/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    var ptr1 = list1
    var ptr2 = list2
    var d1 = null
    var pointer = null
    while (ptr1 && ptr2){
        if (ptr1.val < ptr2.val){
            if (!d1){
                d1 = ptr1
                pointer = d1
            }
            else{
                pointer.next = ptr1
                pointer = pointer.next
            }
            ptr1 = ptr1.next
        }
        else
        {
            if (!d1){
                d1 = ptr2
                pointer = d1
            }
            else{
                pointer.next = ptr2
                pointer = pointer.next
            }
            ptr2 = ptr2.next
        }
    }
    if (ptr1 || ptr2){
        if (ptr1){
            if (!d1){
                d1 = ptr1
            }
            else{
                pointer.next = ptr1
            }
        }
        else{
            if (!d1){
                d1 = ptr2
            }
            else{
                pointer.next = ptr2
            }
        }
    }
    return d1
};