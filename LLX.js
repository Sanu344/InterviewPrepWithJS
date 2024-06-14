class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newNode = new Node(data);
    this.head = newNode;
  }

  insertAtBegining(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) return (this.head = newNode);

    let last = this.head;
    while (last.next) {
      last = last.next;
    }
    last.next = newNode;
  }

  deleteFirst() {
    if (!this.head.next) return (this.head = null);
    let last = this.head;
    while (last.next.next) {
      last = last.next;
    }
    last.next = null;
  }

  InsertAtGiven(previous, data) {
    if (!previous) throw new Error("Previous Node Cannot be null");
    const newNode = new Node(data, previous.next);
    previous.next = newNode;
  }

  findAdress(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) break;
      current = current.next;
    }
    return current;
  }

  deleteByKey(key) {
    if (this.head.data === key) {
      this.head = this.head.next;
      return;
    }
    let previous = this.head;
    while (previous.next) {
      if (previous.next.data === key) {
        previous.next = previous.next.next;
        return;
      }
    }
  }

  deleteLast() {
    this.head = this.head.next;
  }

  populate(data) {
    for (let i = 1; i <= data; i++) {
      this.insertAtEnd(i);
    }
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

function test() {
  let llx = new LinkedList();
  llx.populate(5);
  return llx;
}
