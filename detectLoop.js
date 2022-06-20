let head; 

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

addNode = (val) => {
    let newNode = new Node(val)

    newNode.next = head
    head = newNode
}

// Hashing
// consumes 46 MB
//  runtime 131 ms
detectLoop = (head) => {
    let set = new Set()
    let current = head

    while(current) {
        if(set.has(current)) {
            return true
        } else {
            set.add(current)
        }

        current = current.next
    }
        return false
}

// Floyd Cycle Finding Algorithm
// consumes 44.5 MB
// Runtime 125 ms
floydCycle = (head) => {
    let slow = head,
        fast = head

    while(slow != null && fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next

        if(slow === fast){     
            return true
        }
    }
        return false
}

addNode(20);
addNode(4);
addNode(15);
addNode(10);
 
/* Create loop for testing */
head.next.next.next.next = head;
 
if (floydCycle(head))
    console.log("loop found")
else
    console.log("No loop found")