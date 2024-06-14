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

  inorderTraversal() {
    let result = [];
    this.inorder(this.root, result);
    return result;
  }

  inorder(node, result) {
    if (node !== null) {
      this.inorder(node.left, result);
      result.push(node.key);
      this.inorder(node.right, result);
    }
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

  depthFirstTraversalLeftFirst() {
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
    let value = [];
    this.rightLast(this.root, value);
    return value;
  }

  rightLast(node, value) {
    value.push(node.key);

    if (node.left) this.rightLast(node.left, value);

    if (node.right) this.rightLast(node.right, value);
  }

  depthFirstTraversal() {
    if (this.root === null) {
      return; // return a message or empty
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

  recursiveDelete(node, key) {
    if (key < node.key) {
      node.left = this.recursiveDelete(node.left, key);
    } else if (key > node.key) {
      node.right = this.recursiveDelete(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.right === null && node.left !== null) {
        return node.left;
      } else if (node.right !== null && node.left === null) {
        return node.right;
      } else {
        let successor = this.inorderSuccesor(node.right);
        node.key = successor.key;
        node.right = this.recursiveDelete(node.right, successor.key);
      }
    }
    return node;
  }

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
}
