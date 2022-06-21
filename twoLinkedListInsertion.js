class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

// Runtime 84ms
// Memory usage 49.1 MB
twoLinkedListInsertion = (headA, headB) => {
    let pointerA = headA,
        pointerB = headB

    while(pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB
        pointerB = pointerB ? pointerB.next : headA
    }

    return pointerA
}

// Runtime 
const map = new WeakMap()
    
    while(headA || headB) {
        if(headA) {
            if(map.has(headA)){
                return headA
            }
            
            map.set(headA, true)
            headA = headA.next
        }
        
        if(headB) {
            if(map.has(headB)) {
                return headB
            }
            
            map.set(headB, true)
            headB = headB.next
        }
    }
        return null