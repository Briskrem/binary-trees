/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    function cop(node){
      // console.log(node.val)
      if( node == null) return 0
      let leftNode = cop(node.left)
      let rightNode = cop(node.right)
      let total = node.val + leftNode + rightNode
      console.log(total)
      return total
    }
   

    // cop(this.root)

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  // nextLarger(lowerBound) {
  //   function rat(node, lowerBound){

  //     let siloh = []
  //     if(node == null ) return 0
  //     let leftNode = rat(node.left, lowerBound)
  //     let rightNode = rat(node.right, lowerBound)
  
  //     if(node.val > lowerBound) siloh.push(node.val)
  //     if(leftNode > lowerBound) siloh.push(leftNode)
  //     if(rightNode > lowerBound) siloh.push(rightNode)
  //     return Math.min(...siloh)
      
  //   }
  //   return rat(this.root, lowerBound)
    
  // }
  nextLarger(lowerBound) {
    
    const queue = [this.root]
    const siloh = []

    while(queue.length){
      let current = queue.shift()
      if(current.val > lowerBound) siloh.push(current.val)

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return Math.min(...siloh)
  }
  
  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

let smallLeft = new BinaryTreeNode(30);
let smallRight = new BinaryTreeNode(88);
let smallRoot = new BinaryTreeNode(55, smallLeft, smallRight);
smallTree = new BinaryTree(smallRoot);

// smallTree.maxSum()
console.log(smallTree.nextLarger(31))


module.exports = { BinaryTree, BinaryTreeNode };
