class Node{
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

// Iterative method
// Declare three pointers - prev, next and current 
// prev & next == null
// next = current.next
// current.next = prev
// prev = current
// current = next

// Runtime 89 ms
// Memory 44.6 MB
reverseList = (head) => {
    let prev = null,
        current = head,
        next = null

    while(current !== null) {
        next = current.next
        current.next = prev
        prev = current 
        current = next
    }
        head = prev
        return head;
}

// Recursive method
// Runtime 57 ms
// Memory 43.9 MB
recursiveReverseList = (head) => {
    if(head == null || head.next == null) return head;

    let rest = recursiveReverseList(head.next)
    head.next.next = head

    head.next = null

    return rest
}