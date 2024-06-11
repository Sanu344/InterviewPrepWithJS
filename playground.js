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

  delete(key) {
    if (this.root === null) return;
    let inLoop = true;
    let presentNode = this.root;
    let prevNode;
    let direction;
    while (inLoop) {
      if (presentNode.key === key) {
        if (presentNode.right === null && presentNode.left === null) {
          if (direction) prevNode.right = null;
          else prevNode.left = null;
          inLoop = false;
        } else if (presentNode.right !== null && presentNode.left === null) {
          if (direction) prevNode.right = presentNode.right;
          else prevNode.left = presentNode.right;
          inLoop = false;
        } else if (presentNode.right === null && presentNode.left !== null) {
          if (direction) prevNode.right = presentNode.left;
          else prevNode.left = presentNode.left;
          inLoop = false;
        } else {
          let successor = this.inorderSuccesor(presentNode.right);
          presentNode.key = successor.key;
          presentNode.right = successor.right;
          presentNode.left = successor.left;
          console.log(presentNode);
          inLoop = false;
        }
      } else {
        if (key > presentNode.key) {
          prevNode = presentNode;
          direction = true;
          presentNode = presentNode.right;
        } else {
          prevNode = presentNode;
          direction = false;
          presentNode = presentNode.left;
        }
      }
    }
  }

  inorderSuccesor(pN) {
    while (pN.left) {
      pN = pN.left;
    }
    return pN;
  }
}
