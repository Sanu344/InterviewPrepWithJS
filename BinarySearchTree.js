class Node {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertKey(key) {
    const newNode = new Node(key);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this.insert(this.root, newNode);
  }

  insert(root, node) {
    if (root.key > node.key) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insert(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insert(root.right, node);
      }
    }
  }

  deleteRecursive(key) {
    this.root = this.recursiveDelete(this.root, key);
  }

  recursiveDelete(node, key) {
    if (key < node.key) {
      node.left = this.recursiveDelete(node.left, key); // 1
    } else if (key > node.key) {
      node.right = this.recursiveDelete(node.right, key); //2
    } else {
      if (node.left === null && node.right === null) {
        return null; //3
      } else if (node.right === null && node.left !== null) {
        return node.left;//4
      } else if (node.right !== null && node.left === null) {
        return node.right;//5
      } else {
        let successor = this.inorderSuccesor(node.right);//6
        node.key = successor.key;//7
        node.right = this.recursiveDelete(node.right, successor.key);//8
      }
    }
    return node;//9
  }//end

  inorderPredessor(pN) {
    while (pN.right) {
      pN = pN.right;
    }
    return pN;
  }

  inorderSuccesor(pN) {
    while (pN.left) {
      pN = pN.left;
    }
    return pN;
  }

  inorder(node, result) {
    if (node !== null) {
      this.inorder(node.left, result);
      result.push(node.key);
      this.inorder(node.right, result);
    }
  }

  inorderTraversal() {
    let result = [];
    this.inorder(this.root, result);
    return result;
  }

  preorderTraversal() {
    let result = [];
    this.preorder(this.root, result);
    return result;
  }

  preorder(node, result) {
    if (node !== null) {
      result.push(node.key);
      this.inorder(node.left, result);
      this.inorder(node.right, result);
    }
  }

  postOrderTraversal() {
    let result = [];
    this.postOrder(this.root, result);
    return result;
  }

  postOrder() {
    if (node !== null) {
      this.inorder(node.left, result);
      this.inorder(node.right, result);
      result.push(node.key);
    }
  }

  depthFirstRightLastTraversal() {
    let stack = [];
    let value = [];
    stack.push(this.root);
    while (stack.length > 0) {
      let temp = stack.pop();
      value.push(temp.key);
      if (temp.right) {
        stack.push(temp.right);
      }
      if (temp.left) {
        stack.push(temp.left);
      }
    }
    return value;
  }

  recuesiveDepthFirstRightLast() {
    //my own code
    let value = [];
    this.rightLast(this.root, value);
    return value;
  }

  rightLast(node, value) {
    //my own code
    value.push(node.key);

    if (node.left) this.rightLast(node.left, value);

    if (node.right) this.rightLast(node.right, value);
  }

  depthFirstTraversal() {
    if (this.root === null) {
      return;
    }
    const values = [];
    const stack = [this.root];

    while (stack.length > 0) {
      const node = stack.pop();
      values.push(node.key);

      if (node.right !== null) {
        stack.push(node.right);
      }
      if (node.left !== null) {
        stack.push(node.left);
      }
    }
    return values;
  }

  breadthFirstTraversal() {
    let value = [];
    let queue = new Queue();
    queue.enqueue(this.root);
    while (queue.tail) {
      let node = queue.dQueue();
      value.push(node.key);
      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
    }
  }
}

class DataQ {
  constructor(data, next = null, previous = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}
class Queue {
  constructor() {
    this.out = null;
    this.head = null;
  }

  enqueue(data) {
    const newElement = new DataQ(data);
    if (!this.head) {
      this.head = newElement;
      this.out = newElement;
    } else {
      newElement.next = this.head;
      this.head.previous = newElement;
      this.head = newElement;
    }
  }

  dQueue() {
    if (!this.head) return;

    if (this.head.next === null && this.head.previous === null) {
      let temp = this.head.data;
      this.head = null;
      this.out = null;
      return temp;
    }

    let temp = this.tail.data;
    this.tail.previous.next = null;
    this.tail = this.tail.previous;
    return temp;
  }
}
