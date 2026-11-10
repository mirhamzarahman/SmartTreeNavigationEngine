/**
 * SmartTreeNavigationEngine
 * 
 * Efficient BST iterator using stack-based inorder traversal.
 */

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


class BSTIterator {
    constructor(root) {
        this.stack = [];

        // Store the path to the smallest element
        this.pushLeftNodes(root);
    }

    /**
     * Returns the next smallest value in the BST.
     */
    next() {
        const currentNode = this.stack.pop();

        // After visiting a node, process its right subtree
        this.pushLeftNodes(currentNode.right);

        return currentNode.value;
    }


    /**
     * Checks whether more values exist.
     */
    hasNext() {
        return this.stack.length > 0;
    }


    /**
     * Adds all left-side nodes to the stack.
     */
    pushLeftNodes(node) {
        while (node !== null) {
            this.stack.push(node);
            node = node.left;
        }
    }
}


// Example Usage

const root = new TreeNode(
    7,
    new TreeNode(3),
    new TreeNode(
        15,
        new TreeNode(9),
        new TreeNode(20)
    )
);

const navigator = new BSTIterator(root);

const result = [];

while (navigator.hasNext()) {
    result.push(navigator.next());
}

console.log(result);
