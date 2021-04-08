/**
 * Initialize your data structure here.
 */
 let Trie = function() {
    this.children = Array(26).fill(null);
    this.isValidWord = true; // Caso ''
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */

Trie.prototype.insert = function(word) {
    let current = this;
    for(char of word){
        let index = char.charCodeAt(0) - 97;
        if (current.children[index] == null){
            current.children[index] = new Trie();
            current.children[index].isValidWord = false;
        }
        current = current.children[index];
    }
    current.isValidWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    
    let current = this;
    for (char of word){
        let index = char.charCodeAt(0) - 97;
        if (current.children[index] == null) return false;
        current = current.children[index];
    }
    return current.isValidWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current = this;
    for (char of prefix){
        index = char.charCodeAt(0) - 97;
        console.log('char', index, char.charCodeAt(0));
        if (current.children[index] == null) return false;
        current = current.children[index];
    }
    return true;
};