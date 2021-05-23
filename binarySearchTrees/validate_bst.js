// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function helper(tree, l = null, r = null) {
  if (tree === null) return true;
  if (l !== null && l.value > tree.value) return false;
  if (r !== null && r.value <= tree.value) return false;
  return helper(tree.left, l, tree) && helper(tree.right, tree, r);
}

function validateBst(tree) {
  return helper(tree);
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;
