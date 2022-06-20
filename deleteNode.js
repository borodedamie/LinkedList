// delete node in a LinkedList
class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

addNode = (val) => {
    let newNode = new Node(val)

    newNode.next = head
    head = newNode
}

// deleteNode

deleteNode = (node) => {
    node.val = node.next.val
    node.next = node.next.next
}