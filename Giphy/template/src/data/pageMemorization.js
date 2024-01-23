import { q } from "../events/helpers.js";
class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.favorite = null;
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
 
 
    /**
     * Adds a new node with the given value to the end of the linked list.
     * If the value is already at the end of the list, it does not add a duplicate node.
     * If the page is active, it saves the active page in the new node.
     * 
     * @param {*} value - The value to be added to the linked list.
     * @returns {void}
     */
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

/**
 * Represents a page memorization object.
 * @type {DoublyLinkedList}
 */
export const pageMemo = new DoublyLinkedList();


/**
 * Toggles the active page class based on the provided page object.
 * @param {Object} page - The page object containing the tail and active properties.
 */
export const activeToggle = (page) => {
    const currentActive = q('.activePage');
    if(currentActive){
      currentActive.classList.remove('activePage');
    }
    page.tail.active.classList.add('activePage');
    }