const _q = new WeakMap();

class Queue {
  constructor() {
    _q.set(this, []);
  }

  enqueue(data) {
    _q.get(this).push(data);
  }

  dequeue() {
    if (_q.get(this).length === 0) throw new Error("Stack is empty");
    _q.get(this).shift();
  }

  peek() {
    let items = _q.get(this);
    if (_q.get(this).length === 0) throw new Error("Stack is Empty");
    return items[0];
  }

  clear() {
    _q.set(this, []);
  }

  isEmpty() {
    return _q.get(this).length === 0;
  }

  contains(data) {
    let items = _q.get(this);
    return items.includes(data);
  }

  reverse() {
    let items = _q.get(this);
    _q.set(this, items.reverse());
  }

  print() {
    let str = "";
    let items = _q.get(this);
    for (let i = 0; i < items.length; i++) {
      str += items[i] + "\n";
    }
    return str;
  }
}
