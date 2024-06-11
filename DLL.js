class Node {
  constructor(data, next = null, previous = null) {
    this.previous = previous;
    this.data = data;
    this.next = next;
  }
}

class DoubleyLx {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertAtbegining(data) {
    const newNode = new Node(data, this.head);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.head.previous = newNode;
    this.head = newNode;
  }

  insertAtend(data) {
    const newNode = new Node(data, null, this.tail);
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return;
    }
    this.tail = newNode;
    this.head = newNode;
  }

  insertAtGiven(prev, data) {
    if (!prev) throw new Error("Invalid Prev Node");

    const newNode = new Node(data, prev.next, prev);

    if (prev.next) {
      prev.next.previous = newNode;
      prev.next = newNode;
      return;
    }

    this.tail = newNode;
    prev.next = newNode;
  }

  deleteFirstNode() {
    if (!this.head) throw new Error("Empty DLL");

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return;
    }

    this.head = this.head.next;
    this.head.previous = null;
  }

  deleteLastNode() {
    if (!this.head) throw new Error("Empty DLL");

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return;
    }

    this.tail = this.tail.previous;
    this.tail.next = null;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    temp = null;
  }

  get populate() {
    this.insertAtbegining(1);
    this.insertAtend(3);
  }
}
