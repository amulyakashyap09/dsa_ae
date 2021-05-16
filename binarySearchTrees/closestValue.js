// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traversal(node, target, min) {
  if (node) {
    if (node.left) {
    } else if (node.right) {
    } else {
    }
  }
}

function findClosestValueInBst(tree, target) {
  // Write your code here.
  const d1 = travelLeft(tree, target, Number.NEGATIVE_INFINITY);
  const d2 = travelRight(tree, target, Number.NEGATIVE_INFINITY);
  return d1 >= d2 ? d1 : d2;
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
