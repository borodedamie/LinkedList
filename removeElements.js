class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// Remove Element from linkedList
//  if Node.val == val

removeElement = (head, val) => {
    if(!head) return null

    let node = head;
    while(node && node.next){
        if(node.next.val == val) node.next = node.next.next
        else node = node.next
    }

    if(head.val == val) {head = head.next}
    return head
}