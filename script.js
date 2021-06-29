const _stack = new WeakMap();

class Stack {
  constructor() {
    _stack.set(this, []);
  }

  push(value) {
    const copy = [..._stack.get(this)];
    copy.push(value);
    _stack.set(this, [...copy]);
  }

  pop() {
    const copy = [..._stack.get(this)];
    if (copy.length > 0) {
      const removed = copy.pop();
      _stack.set(this, copy);
      return removed;
    } else throw new Error("Stack is empty");
  }

  peek() {
    const copy = [..._stack.get(this)];
    if (copy.length > 0) return copy[copy.length - 1];
    else throw new Error("Stack is empty");
  }

  get count() {
    const copy = [..._stack.get(this)];
    return copy.length;
  }
}

const stack = new Stack();
