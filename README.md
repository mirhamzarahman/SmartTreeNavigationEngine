# 🌳 SmartTreeNavigationEngine

A lightweight hierarchical data navigation system built around an efficient Binary Search Tree (BST) iterator. The project demonstrates how large structured datasets can be explored in sorted order using optimized memory management and lazy traversal techniques.

---

## 📌 Project Overview

Modern applications often store information in hierarchical structures such as:

- File systems
- Database indexes
- Product catalogs
- Organization trees
- Ranking systems

SmartTreeNavigationEngine provides a controlled way to navigate through ordered tree-based data without loading the entire dataset into memory.

The system uses a stack-powered iterator that retrieves the next smallest value whenever requested.

---

## 🌍 Real-World Conceptual Scenario

Imagine an e-commerce platform storing millions of products inside a price-based search tree.

Instead of generating a complete sorted product list every time, the navigation engine can:

1. Start from the smallest product price.
2. Return products one by one.
3. Load only required branches of the tree.
4. Reduce unnecessary memory usage.

This approach creates a scalable browsing experience.

---

## 🧠 Core Concept

The project is based on:

- Binary Search Tree traversal
- Inorder traversal
- Stack-based recursion simulation
- Lazy data processing

For a BST, inorder traversal always produces values in ascending order:

```
Left → Root → Right
```

---

## ⚙️ How The System Works

The iterator maintains a stack containing nodes that are waiting to be processed.

When requesting the next item:

1. Remove the top node from the stack.
2. Return its value.
3. Explore its right subtree.
4. Add all left-side nodes from that subtree into the stack.

This ensures the next smallest element is always available.

---

## 🔍 Algorithm / Data Structure Used

### Binary Search Tree (BST)

A BST stores values where:

```
Left Child < Parent < Right Child
```

### Stack

The stack replaces recursive function calls and stores the traversal path.

---

## 🪜 Step-by-Step Logic

Example tree:

```
        7
       / \
      3   15
         /  \
        9    20
```

Initial stack:

```
[7, 3]
```

Operations:

```
next() → 3
next() → 7
next() → 9
next() → 15
next() → 20
```

The iterator never stores the complete sorted list.

---

## ✨ Key Features

✅ Efficient BST navigation  
✅ Memory-friendly traversal  
✅ Lazy value generation  
✅ Average O(1) next operation  
✅ O(height) memory usage  
✅ Clean reusable iterator design  

---

## 📖 Example Usage

### Input Tree

```text
        10
       /  \
      5    15
     / \
    2   7
```

### Iterator Output

```text
2 → 5 → 7 → 10 → 15
```

---

## ⏱️ Complexity Analysis

| Operation | Complexity |
|---|---|
| next() | Average O(1) |
| hasNext() | O(1) |
| Memory Usage | O(h) |

Where `h` is the height of the Binary Search Tree.

---

## 🛠️ Technologies Used

- JavaScript (ES6+)
- Data Structures
- Object-Oriented Programming
- Binary Search Tree Algorithms

---

## 📂 Project Structure

```
SmartTreeNavigationEngine/
│
├── src/
│   └── BSTIterator.js
│
├── README.md
│
└── package.json
```

---

## 🚀 How To Run The Project

### Clone Repository

```bash
git clone https://github.com/mirhamzarahman/smarttree-navigation-engine.git
```

### Navigate to Project

```bash
cd smarttree-navigation-engine
```

### Run Example

```bash
node src/BSTIterator.js
```

---

## 📚 Learning Outcomes

Through this project, you will understand:

- How BST structures organize sorted data
- How inorder traversal works
- How stacks simulate recursion
- How lazy processing improves efficiency
- How to design reusable iterator systems

---

## 🔮 Future Improvements

Possible enhancements:

- Add insert/delete BST operations
- Add visualization for tree traversal
- Support custom sorting rules
- Create a web-based tree explorer
- Add database indexing simulation

---

## 📄 License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this project with proper attribution.
