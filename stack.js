const _stack = new WeakMap();

class Stack {
  constructor() {
    _stack.set(this, []);
  }

  push(data) {
    _stack.get(this).push(data);
  }

  pop() {
    if (_stack.get(this).length === 0) throw new Error("Stack is empty");
    _stack.get(this).pop();
  }

  peek() {
    let items = _stack.get(this);
    if (_stack.get(this).length === 0) throw new Error("Stack is Empty");
    return items[items.length - 1];
  }

  clear() {
    _stack.set(this, []);
  }

  isEmpty() {
    return _stack.get(this).length === 0;
  }

  contains(data) {
    let items = _stack.get(this);
    return items.includes(data);
  }

  reverse() {
    let items = _stack.get(this);
    _stack.set(this, items.reverse());
  }

  print() {
    let str = "";
    let items = _stack.get(this);
    for (let i = 0; i < items.length; i++) {
      str += items[i] + "\n";
    }
    return str;
  }
}
