/* eslint-disable linebreak-style */
import { q } from '../events/helpers.js';
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.offset = 0;
    this.favorite = null;
    this.active = null;
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
       * @return {void}
       */
  addLast(value) {
    if (this.tail && this.tail.value === value) { // check if clicking on the same page
      if (this.tail.offset) {
        this.tail.offset = 0;
      }
      return;
    }
    const newNode = new LinkedListNode(value);
    const activePage = q('.activePage');
    // if the page is active, save it
    if (activePage) {
      newNode.active = activePage;
    }

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }

    this.tail = newNode;
    checkNextArrow();
    checkPrevArrow();
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
  if (currentActive) {
    currentActive.classList.remove('activePage');
  }
  if (page.tail.active) {
    page.tail.active.classList.add('activePage');
  }
};
export const checkPrevArrow = () => {
  if (pageMemo.tail.prev) {
    q('.previous-button').classList.add('activeArrow');
  } else {
    q('.previous-button').classList.remove('activeArrow');
  }
};
export const checkNextArrow = () => {
  if (pageMemo.tail.next) {
    q('.next-button').classList.add('activeArrow');
  } else {
    q('.next-button').classList.remove('activeArrow');
  }
};
