
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = root => {
    if (root === null) return [];
    return inorderTraversal(root.left).concat([root.val], inorderTraversal(root.right));
};