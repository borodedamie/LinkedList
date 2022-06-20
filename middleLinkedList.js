class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// Floyd Cycle Finding Algorithm
// Runtime 69 ms
// Memory usage 42.1 MB
floydCycle = (head) => {
    let slow = head,
        fast = head

    if(head !== null){
        while(fast !== null && fast.next !== null) {
            fast = fast.next.next
            slow = slow.next
        }

        return slow
    }
}