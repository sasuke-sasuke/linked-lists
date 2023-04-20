/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      return undefined;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead.val;
  }


  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let foundNode = this.getAt(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }



  /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {
      if (idx < 0 || idx > this.length) {
        return false;
      }
      if (idx === 0) {
        this.unshift(val);
        return true;
      }
      if (idx === this.length) {
        this.push(val);
        return true;
      }
      const newNode = new Node(val);
      let prev = this.getAt(idx - 1);
      let temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }
    if (idx === 0) {
      return this.shift();
    }
    if (idx === this.length - 1) {
      return this.pop();
    }
    let prev = this.getAt(idx - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed.val;
  }


  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return null;
    }
    let sum = 0;
    let count = 0;
    let current = this.head;
    while (current) {
      sum += current.val;
      count++;
      current = current.next;
    }
    return sum / count;
  }
}

module.exports = LinkedList;
