/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
  findDepthFirst(val){
    const toVisitStack = [this]
    while(toVisitStack.length){
      const current = toVisitStack.pop()
      console.log('visiting', current.val)
      if(current.val == val){
        return current
      }
      for(let child of current.children){
        toVisitStack.push(child)
      }
    }
  }
}

const rootNode = new TreeNode('html', [
  new TreeNode('head', [ new TreeNode('titl3'), new TreeNode('link')]),
  new TreeNode('body', [ new TreeNode('div1', [ new TreeNode('p')]), 
    new TreeNode('div2')])
])
const rootNode2 = new TreeNode(100, [
  new TreeNode(10, [ new TreeNode(100), new TreeNode(10)]),
  new TreeNode(10, [ new TreeNode(10, [ new TreeNode(10)]), 
    new TreeNode(10)])
])


// console.log(rootNode.findDepthFirst('p'))



class Tree {
  constructor(root = null) {
    this.root = root;
  }

  findInTree(val){
    // console.log(this.root.findDepthFirst(val))
    return this.root.findDepthFirst(val)
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let stack = [this.root]
    let siloh = 0
    while(stack.length != 0){
      let current = stack.pop()
      // console.log(current, '$$')
      // console.log(stack, '@@')
      
      siloh += current.val
      // stack = current.children
      for(let child of current.children){
        stack.push(child)
      }
    }
    console.log(siloh)
    return siloh
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const stack = [this.root]
    let count = 0
    while(stack.length){
      const current = stack.pop()
      // console.log(current.val)
      if(current.val % 2 == 0) count += 1
      for(let child of current.children){
        stack.push(child)
      }
    }
    console.log(count)
    return count
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const stack = [this.root]
    let count = 0
    while(stack.length){
      const current = stack.pop()
      if(current.val > lowerBound) count += 1
      for(let child of current.children){
        stack.push(child)
      }
    }
    console.log(count)
    return count
  }
}

let t = new Tree(rootNode2)
// t.findInTree('p')
// t.countEvens()
t.numGreater(50)

module.exports = { Tree, TreeNode };
