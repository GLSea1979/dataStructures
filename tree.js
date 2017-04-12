//++++ Node Constructor ++++\\
function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

//++++ Tree Constructor ++++\\
function Tree(val) {
  this.root = new Node(val);
}

//++++ Prototype Method to Add Nodes to Tree ++++\\
Tree.prototype.addNode = function(val) {
  let root = this.root;

  if (!root) {
    return this.root = new Node(val);
  }

  let current = this.root;
  let newNode = new Node(val);

  while(current) {
    if (val < current.val) {
      if (!current.left) {
        current.left = newNode;
        break;
      }
      current = current.left;
    } else {
      if (!current.right) {
        current.right = newNode;
        break;
      }
      current = current.right;
    }
  }
}

//++++ Prototype method for PreOrder Search ++++\\
Tree.prototype.preorder = function(node) {
  console.log('pre', node.val);
  if (node.left) this.preorder(node.left);
  if (node.right) this.preorder(node.right);
}

//++++ Prototype method for InOrder Search ++++\\
Tree.prototype.inorder = function(node) {
  if (node.left) this.inorder(node.left);
  console.log('in', node.val);
  if (node.right) this.inorder(node.right);
}

//++++ Prototype Method for PostOrder Search++++\\
Tree.prototype.postorder = function(node) {
  if (node.left) this.postorder(node.left);
  if (node.right) this.postorder(node.right);
  console.log('post', node.val)
}

//++++ Attempt at a Recursive Breadth Seach using a queue data structure ++++\\
Tree.prototype.breadth = function(node) {
  let queue = [node];

  function breadthFirst(currentQueue) {
    if (currentQueue.length === 0) {
      return;
    }

    let parent = currentQueue.shift();
    console.log('breath', parent.val);

    if (parent.left) {
      queue.push(parent.left);
    }

    if (parent.right) {
      queue.push(parent.right);
    }

    breadthFirst(queue);
  }

  breadthFirst(queue);
}

//++++ Instantiate tree w/ root node instance ++++\\
const tree = new Tree(40);

//++++ Simple loop to populate tree with nodes ++++\\
for (let i = 0; i < 85; i += 4) {
  if (i !== 40) {
    tree.addNode(i);
  }
}

//++++ Method Calls to log values to the console ++++\\
tree.preorder(tree.root);
tree.inorder(tree.root);
tree.postorder(tree.root);
tree.breadth(tree.root);
 wrap
April 6th at 3:42 PM • 2KB Markdown (raw) snippet •  Private snippet shared with you
