class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

isPalindrome = (head) => {
    if(head === null || head.next === null) return true
    
    let slow = head,
        fast = head,
        reverse = null
    
    while(fast.next !== null && fast.next.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    
    while(slow) {
        let temp = slow.next;
        slow.next = reverse;
        reverse = slow;
        slow = temp
    }
    
    while(head && reverse) {
        if(head.val !== reverse.val) return false
        
        head = head.next
        reverse = reverse.next
    }
    
        return true
}