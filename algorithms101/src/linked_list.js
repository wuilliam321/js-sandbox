const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFront(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  getFirst() {
    if (!this.head) {
      return null;
    }
    return this.head.data;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }

  addBack(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let lastNode = this.head;

      while (lastNode.next) {
        lastNode = lastNode.next;
      }

      lastNode.next = newNode;
    }
  }

  size() {
    let count = 0;
    if (this.head) {
      let current = this.head;
      while (current) {
        count += 1;
        current = current.next;
      }
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  deleteValue(data) {
    if (this.head) {
      if (this.head.data === data) {
        this.head = null;
        return;
      }
      let prev = null;
      let current = this.head;
      while (current.data !== data) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
  }

  deleteLastValue() {
    if (this.head && !this.head.next) {
      this.head = null;
    }
    if (this.head) {
      let prev = null;
      let current = this.head;
      while (current.next) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
    }
  }
}

module.exports = LinkedList;
