
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
var mergeNodes = function(head) {
    if (head){
        var ptr = head
        var sum = 0
        var d1 = null
        var ptr1 = null
        while (ptr){
            if (ptr.val != 0){
                sum += ptr.val
            }
            else
            {
                if (sum != 0){
                    newNode = new ListNode(sum)
                    if (!d1){
                        d1 = newNode
                        ptr1 = d1
                    }
                    else{
                        ptr1.next = newNode
                        ptr1 = ptr1.next
                    }
                    sum = 0
                }
            }
            ptr = ptr.next
        }
    }
    return d1
};