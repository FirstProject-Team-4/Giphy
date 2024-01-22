import { q } from "../events/helpers.js";
class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.active=null;
        this.next = null;
        this.prev = null;
    }
}
 
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;

    }
 
 
    addLast(value) {
        if(this.tail&&this.tail.value===value){  //check if clicking on the same page
            return;
        }
        const newNode = new LinkedListNode(value);
        const activePage=q('.activePage')        
        if(activePage){                         //if the page is active, save it
          newNode.active=activePage;
        }
 
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
        }
 
        this.tail = newNode;
    }
}
export const pageMemo = new DoublyLinkedList();