class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    };
};

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };
    
    // add value to the head of the LinkedList
    addHead(val) {
    let newNode = new Node(val);
    
    if(!this.head) {
        this.head = newNode;
        this.tail = this.head;
    };
    
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    
    this.length++;
    return this;
    }
    
    // add value to the tail of the LinkedList
    addTail(val) {
        let newNode = new Node(val);
        
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        
        this.length++;
        return this;
    }
    
    // remove from the head of the LinkedList
    removeHead() {
        let removed = this.head;
        
        if(!this.head) return undefined;
        
        this.head = this.head.next;
        this.head.prev = null;
        
        this.length--;
        return removed;
    }
    
    // remove from the tail of the LinkedList
    removeTail() {
        let removed = this.tail;
        
        if(!this.tail) return undefined;
        
        if(this.length == 1) {
            this.head = null;
            this.tail = null;
        };
        
        this.tail = removed.prev;
        this.tail.next = null;
        
        this.length--;
        return removed;
    }
    
    // Get value using index as the input 
    find(index) {
        let current
        
        if(index < 0 || index >= this.length) return undefined;
        
        if(index <= this.length / 2) {
            current = this.head;
            for(let i = 0; i < index; i++) current = current.next;
        } else {
            current = this.tail;
            for(let i = this.length; i > index; i--) current = current.prev;
        }
        
        return current;
    }
    
    // Insert value to the LinkedList
    insert(val, index) {
        if (index < 0 || index > this.length) return null;
        if (index === this.length) return this.addTail(val);
        if (index === 0) return this.addHead(val);
        
        let prev = this.find(index - 1),
            newNode = new Node(val),
            temp = prev.next;
            
        prev.next = newNode;
        newNode.next = temp;
        newNode.prev = prev;
        
        this.length++;
        return true;
    }
    
    // remove value from the LinkedList using index as an input
    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === this.length) return this.removeTail();
        if (index === 0) return this.removeHead();
        
        let removed = this.find(index);
        
        removed.prev.next = removed.next;
        removed.next.prev = removed.prev;
        
        this.length--;
        return removed;
    }
    
    // Update the LinkedList
    update(val, index) {
        let node = this.find(index);
        if (node) node.val = val;
        return node;
    }
};