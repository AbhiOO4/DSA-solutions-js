/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var p1 = l1;
    var p2 = l2;
    var sum = 0;
    var carry = 0;
    var newNode = null;
    var count = 0;
    while (p1 || p2){
        if (p1 && p2){
            sum = p1.val + p2.val;
            p1 = p1.next
            p2 = p2.next
        }
        else{
            if (p1){
                sum = p1.val
                p1 = p1.next
            }
            else{
                sum = p2.val
                p2 = p2.next
            }
        }
        sum += carry
        if (Math.floor(sum/10) == 1){
            carry = 1
            sum = sum%10
        }
        else{
            carry = 0
        }
        newNode = new ListNode(sum)
        if (count == 0){
            var head = newNode
            var ptr = newNode
        }
        else{
            ptr.next = newNode
            ptr = ptr.next
        }
        count++
    }
    if (carry == 1){
        newNode = new ListNode(carry)
        ptr.next = newNode
    }
    return head
};