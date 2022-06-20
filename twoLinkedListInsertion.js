class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

twoLinkedListInsertion = (headA, headB) => {
    let pointerA = headA,
        pointerB = headB

    while(pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB
        pointerB = pointerB ? pointerB.next : headA
    }

    return pointerA
}