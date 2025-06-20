// Data Structures Data
const dataStructures = [
    {
        id: 'array',
        name: 'Array',
        description: 'A collection of elements stored at contiguous memory locations.',
        timeComplexity: {
            access: 'O(1)',
            search: 'O(n)',
            insertion: 'O(n)',
            deletion: 'O(n)'
        },
        spaceComplexity: 'O(n)',
        advantages: [
            'Fast access to elements by index',
            'Memory efficient',
            'Cache friendly due to locality'
        ],
        disadvantages: [
            'Fixed size in most languages',
            'Insertion and deletion can be expensive',
            'Memory waste if not fully utilized'
        ],
        useCases: [
            'Storing homogeneous data',
            'Mathematical operations',
            'Implementing other data structures'
        ]
    },
    {
        id: 'linked-list',
        name: 'Linked List',
        description: 'A linear data structure where elements are stored in nodes, each containing data and a reference to the next node.',
        timeComplexity: {
            access: 'O(n)',
            search: 'O(n)',
            insertion: 'O(1)',
            deletion: 'O(1)'
        },
        spaceComplexity: 'O(n)',
        advantages: [
            'Dynamic size',
            'Efficient insertion/deletion at beginning',
            'No memory waste'
        ],
        disadvantages: [
            'No random access',
            'Extra memory for pointers',
            'Not cache friendly'
        ],
        useCases: [
            'Implementing stacks and queues',
            'Undo functionality',
            'Dynamic memory allocation'
        ]
    },
    {
        id: 'stack',
        name: 'Stack',
        description: 'A Last-In-First-Out (LIFO) data structure where elements are added and removed from the same end.',
        timeComplexity: {
            access: 'O(n)',
            search: 'O(n)',
            insertion: 'O(1)',
            deletion: 'O(1)'
        },
        spaceComplexity: 'O(n)',
        advantages: [
            'Simple implementation',
            'Efficient push/pop operations',
            'Memory efficient'
        ],
        disadvantages: [
            'Limited access patterns',
            'Stack overflow risk',
            'No random access'
        ],
        useCases: [
            'Function call management',
            'Expression evaluation',
            'Browser history',
            'Undo operations'
        ]
    },
    {
        id: 'queue',
        name: 'Queue',
        description: 'A First-In-First-Out (FIFO) data structure where elements are added at the rear and removed from the front.',
        timeComplexity: {
            access: 'O(n)',
            search: 'O(n)',
            insertion: 'O(1)',
            deletion: 'O(1)'
        },
        spaceComplexity: 'O(n)',
        advantages: [
            'Fair processing order',
            'Efficient enqueue/dequeue',
            'Natural for scheduling'
        ],
        disadvantages: [
            'No random access',
            'Memory overhead in linked implementation',
            'Limited access patterns'
        ],
        useCases: [
            'Process scheduling',
            'Breadth-first search',
            'Handling requests',
            'Buffer implementation'
        ]
    },
    {
        id: 'binary-tree',
        name: 'Binary Tree',
        description: 'A hierarchical data structure where each node has at most two children, referred to as left and right child.',
        timeComplexity: {
            search: 'O(log n) - O(n)',
            insertion: 'O(log n) - O(n)',
            deletion: 'O(log n) - O(n)'
        },
        spaceComplexity: 'O(n)',
        advantages: [
            'Hierarchical data representation',
            'Efficient searching in BST',
            'Dynamic size'
        ],
        disadvantages: [
            'Can become unbalanced',
            'Complex implementation',
            'Extra memory for pointers'
        ],
        useCases: [
            'Hierarchical data storage',
            'Expression parsing',
            'Database indexing',
            'File system structure'
        ]
    },
    {
        id: 'hash-table',
        name: 'Hash Table',
        description: 'A data structure that maps keys to values using a hash function for efficient data retrieval.',
        timeComplexity: {
            search: 'O(1) avg, O(n) worst',
            insertion: 'O(1) avg, O(n) worst',
            deletion: 'O(1) avg, O(n) worst'
        },
        spaceComplexity: 'O(n)',
        advantages: [
            'Very fast average-case operations',
            'Flexible key types',
            'Efficient for lookups'
        ],
        disadvantages: [
            'Worst-case performance degradation',
            'Hash collisions',
            'Memory overhead'
        ],
        useCases: [
            'Database indexing',
            'Caching systems',
            'Symbol tables',
            'Associative arrays'
        ]
    }
];

// Code Examples
const codeExamples = {
    array: {
        javascript: `// Array Implementation and Operations
class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  // Access element at index - O(1)
  get(index) {
    return this.data[index];
  }

  // Insert element at end - O(1)
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // Remove element from end - O(1)
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // Insert element at index - O(n)
  insert(index, item) {
    // Shift elements to the right
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
  }

  // Delete element at index - O(n)
  delete(index) {
    const item = this.data[index];
    // Shift elements to the left
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}`,
        python: `# Array Implementation in Python
class Array:
    def __init__(self):
        self.data = {}
        self.length = 0
    
    # Access element at index - O(1)
    def get(self, index):
        if 0 <= index < self.length:
            return self.data.get(index)
        raise IndexError("Index out of range")
    
    # Insert element at end - O(1)
    def push(self, item):
        self.data[self.length] = item
        self.length += 1
        return self.length
    
    # Remove element from end - O(1)
    def pop(self):
        if self.length == 0:
            raise IndexError("Array is empty")
        last_item = self.data[self.length - 1]
        del self.data[self.length - 1]
        self.length -= 1
        return last_item
    
    # Insert element at index - O(n)
    def insert(self, index, item):
        if index < 0 or index > self.length:
            raise IndexError("Index out of range")
        
        # Shift elements to the right
        for i in range(self.length, index, -1):
            self.data[i] = self.data[i - 1]
        
        self.data[index] = item
        self.length += 1
    
    # Delete element at index - O(n)
    def delete(self, index):
        if index < 0 or index >= self.length:
            raise IndexError("Index out of range")
        
        item = self.data[index]
        
        # Shift elements to the left
        for i in range(index, self.length - 1):
            self.data[i] = self.data[i + 1]
        
        del self.data[self.length - 1]
        self.length -= 1
        return item`,
        java: `// Array Implementation in Java
public class DynamicArray<T> {
    private Object[] data;
    private int length;
    private int capacity;
    
    public DynamicArray() {
        this.capacity = 10;
        this.data = new Object[capacity];
        this.length = 0;
    }
    
    // Access element at index - O(1)
    @SuppressWarnings("unchecked")
    public T get(int index) {
        if (index < 0 || index >= length) {
            throw new IndexOutOfBoundsException("Index out of range");
        }
        return (T) data[index];
    }
    
    // Insert element at end - O(1) amortized
    public int push(T item) {
        if (length >= capacity) {
            resize();
        }
        data[length] = item;
        length++;
        return length;
    }
    
    // Remove element from end - O(1)
    @SuppressWarnings("unchecked")
    public T pop() {
        if (length == 0) {
            throw new RuntimeException("Array is empty");
        }
        T lastItem = (T) data[length - 1];
        data[length - 1] = null;
        length--;
        return lastItem;
    }
    
    // Insert element at index - O(n)
    public void insert(int index, T item) {
        if (index < 0 || index > length) {
            throw new IndexOutOfBoundsException("Index out of range");
        }
        
        if (length >= capacity) {
            resize();
        }
        
        // Shift elements to the right
        for (int i = length; i > index; i--) {
            data[i] = data[i - 1];
        }
        
        data[index] = item;
        length++;
    }
    
    // Delete element at index - O(n)
    @SuppressWarnings("unchecked")
    public T delete(int index) {
        if (index < 0 || index >= length) {
            throw new IndexOutOfBoundsException("Index out of range");
        }
        
        T item = (T) data[index];
        
        // Shift elements to the left
        for (int i = index; i < length - 1; i++) {
            data[i] = data[i + 1];
        }
        
        data[length - 1] = null;
        length--;
        return item;
    }
    
    private void resize() {
        capacity *= 2;
        Object[] newData = new Object[capacity];
        System.arraycopy(data, 0, newData, 0, length);
        data = newData;
    }
    
    public int size() {
        return length;
    }
}`,
        cpp: `// Array Implementation in C++
#include <iostream>
#include <stdexcept>

template<typename T>
class DynamicArray {
private:
    T* data;
    int length;
    int capacity;
    
    void resize() {
        capacity *= 2;
        T* newData = new T[capacity];
        for (int i = 0; i < length; i++) {
            newData[i] = data[i];
        }
        delete[] data;
        data = newData;
    }
    
public:
    DynamicArray() : length(0), capacity(10) {
        data = new T[capacity];
    }
    
    ~DynamicArray() {
        delete[] data;
    }
    
    // Access element at index - O(1)
    T get(int index) {
        if (index < 0 || index >= length) {
            throw std::out_of_range("Index out of range");
        }
        return data[index];
    }
    
    // Insert element at end - O(1) amortized
    int push(T item) {
        if (length >= capacity) {
            resize();
        }
        data[length] = item;
        length++;
        return length;
    }
    
    // Remove element from end - O(1)
    T pop() {
        if (length == 0) {
            throw std::runtime_error("Array is empty");
        }
        T lastItem = data[length - 1];
        length--;
        return lastItem;
    }
    
    // Insert element at index - O(n)
    void insert(int index, T item) {
        if (index < 0 || index > length) {
            throw std::out_of_range("Index out of range");
        }
        
        if (length >= capacity) {
            resize();
        }
        
        // Shift elements to the right
        for (int i = length; i > index; i--) {
            data[i] = data[i - 1];
        }
        
        data[index] = item;
        length++;
    }
    
    // Delete element at index - O(n)
    T deleteAt(int index) {
        if (index < 0 || index >= length) {
            throw std::out_of_range("Index out of range");
        }
        
        T item = data[index];
        
        // Shift elements to the left
        for (int i = index; i < length - 1; i++) {
            data[i] = data[i + 1];
        }
        
        length--;
        return item;
    }
    
    int size() const {
        return length;
    }
};`,
        c: `// Array Implementation in C
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int* data;
    int length;
    int capacity;
} DynamicArray;

// Initialize array
DynamicArray* createArray() {
    DynamicArray* arr = (DynamicArray*)malloc(sizeof(DynamicArray));
    arr->capacity = 10;
    arr->length = 0;
    arr->data = (int*)malloc(arr->capacity * sizeof(int));
    return arr;
}

// Resize array when needed
void resize(DynamicArray* arr) {
    arr->capacity *= 2;
    arr->data = (int*)realloc(arr->data, arr->capacity * sizeof(int));
}

// Access element at index - O(1)
int get(DynamicArray* arr, int index) {
    if (index < 0 || index >= arr->length) {
        printf("Error: Index out of range\\n");
        return -1;
    }
    return arr->data[index];
}

// Insert element at end - O(1) amortized
int push(DynamicArray* arr, int item) {
    if (arr->length >= arr->capacity) {
        resize(arr);
    }
    arr->data[arr->length] = item;
    arr->length++;
    return arr->length;
}

// Remove element from end - O(1)
int pop(DynamicArray* arr) {
    if (arr->length == 0) {
        printf("Error: Array is empty\\n");
        return -1;
    }
    int lastItem = arr->data[arr->length - 1];
    arr->length--;
    return lastItem;
}

// Insert element at index - O(n)
void insert(DynamicArray* arr, int index, int item) {
    if (index < 0 || index > arr->length) {
        printf("Error: Index out of range\\n");
        return;
    }
    
    if (arr->length >= arr->capacity) {
        resize(arr);
    }
    
    // Shift elements to the right
    for (int i = arr->length; i > index; i--) {
        arr->data[i] = arr->data[i - 1];
    }
    
    arr->data[index] = item;
    arr->length++;
}

// Delete element at index - O(n)
int deleteAt(DynamicArray* arr, int index) {
    if (index < 0 || index >= arr->length) {
        printf("Error: Index out of range\\n");
        return -1;
    }
    
    int item = arr->data[index];
    
    // Shift elements to the left
    for (int i = index; i < arr->length - 1; i++) {
        arr->data[i] = arr->data[i + 1];
    }
    
    arr->length--;
    return item;
}

// Free memory
void destroyArray(DynamicArray* arr) {
    free(arr->data);
    free(arr);
}`
    },
    'linked-list': {
        javascript: `// Linked List Implementation
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert at beginning - O(1)
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Insert at end - O(n)
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Delete by value - O(n)
  delete(data) {
    if (!this.head) return false;

    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.size--;
      return true;
    }
    return false;
  }

  // Search for value - O(n)
  find(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // Display list
  display() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    return elements;
  }
}`,
        python: `# Linked List Implementation in Python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.size = 0
    
    # Insert at beginning - O(1)
    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        self.size += 1
    
    # Insert at end - O(n)
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
        self.size += 1
    
    # Delete by value - O(n)
    def delete(self, data):
        if not self.head:
            return False
        
        if self.head.data == data:
            self.head = self.head.next
            self.size -= 1
            return True
        
        current = self.head
        while current.next and current.next.data != data:
            current = current.next
        
        if current.next:
            current.next = current.next.next
            self.size -= 1
            return True
        return False
    
    # Search for value - O(n)
    def find(self, data):
        current = self.head
        index = 0
        while current:
            if current.data == data:
                return index
            current = current.next
            index += 1
        return -1
    
    # Display list
    def display(self):
        elements = []
        current = self.head
        while current:
            elements.append(current.data)
            current = current.next
        return elements`,
        java: `// Linked List Implementation in Java
class Node<T> {
    T data;
    Node<T> next;
    
    public Node(T data) {
        this.data = data;
        this.next = null;
    }
}

public class LinkedList<T> {
    private Node<T> head;
    private int size;
    
    public LinkedList() {
        this.head = null;
        this.size = 0;
    }
    
    // Insert at beginning - O(1)
    public void prepend(T data) {
        Node<T> newNode = new Node<>(data);
        newNode.next = head;
        head = newNode;
        size++;
    }
    
    // Insert at end - O(n)
    public void append(T data) {
        Node<T> newNode = new Node<>(data);
        if (head == null) {
            head = newNode;
        } else {
            Node<T> current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        size++;
    }
    
    // Delete by value - O(n)
    public boolean delete(T data) {
        if (head == null) return false;
        
        if (head.data.equals(data)) {
            head = head.next;
            size--;
            return true;
        }
        
        Node<T> current = head;
        while (current.next != null && !current.next.data.equals(data)) {
            current = current.next;
        }
        
        if (current.next != null) {
            current.next = current.next.next;
            size--;
            return true;
        }
        return false;
    }
    
    // Search for value - O(n)
    public int find(T data) {
        Node<T> current = head;
        int index = 0;
        while (current != null) {
            if (current.data.equals(data)) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    
    public int size() {
        return size;
    }
}`,
        cpp: `// Linked List Implementation in C++
#include <iostream>

template<typename T>
class Node {
public:
    T data;
    Node* next;
    
    Node(T data) : data(data), next(nullptr) {}
};

template<typename T>
class LinkedList {
private:
    Node<T>* head;
    int size;
    
public:
    LinkedList() : head(nullptr), size(0) {}
    
    ~LinkedList() {
        clear();
    }
    
    // Insert at beginning - O(1)
    void prepend(T data) {
        Node<T>* newNode = new Node<T>(data);
        newNode->next = head;
        head = newNode;
        size++;
    }
    
    // Insert at end - O(n)
    void append(T data) {
        Node<T>* newNode = new Node<T>(data);
        if (!head) {
            head = newNode;
        } else {
            Node<T>* current = head;
            while (current->next) {
                current = current->next;
            }
            current->next = newNode;
        }
        size++;
    }
    
    // Delete by value - O(n)
    bool deleteValue(T data) {
        if (!head) return false;
        
        if (head->data == data) {
            Node<T>* temp = head;
            head = head->next;
            delete temp;
            size--;
            return true;
        }
        
        Node<T>* current = head;
        while (current->next && current->next->data != data) {
            current = current->next;
        }
        
        if (current->next) {
            Node<T>* temp = current->next;
            current->next = current->next->next;
            delete temp;
            size--;
            return true;
        }
        return false;
    }
    
    // Search for value - O(n)
    int find(T data) {
        Node<T>* current = head;
        int index = 0;
        while (current) {
            if (current->data == data) {
                return index;
            }
            current = current->next;
            index++;
        }
        return -1;
    }
    
    void clear() {
        while (head) {
            Node<T>* temp = head;
            head = head->next;
            delete temp;
        }
        size = 0;
    }
    
    int getSize() const {
        return size;
    }
};`,
        c: `// Linked List Implementation in C
#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

typedef struct {
    Node* head;
    int size;
} LinkedList;

// Create new node
Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Initialize linked list
LinkedList* createLinkedList() {
    LinkedList* list = (LinkedList*)malloc(sizeof(LinkedList));
    list->head = NULL;
    list->size = 0;
    return list;
}

// Insert at beginning - O(1)
void prepend(LinkedList* list, int data) {
    Node* newNode = createNode(data);
    newNode->next = list->head;
    list->head = newNode;
    list->size++;
}

// Insert at end - O(n)
void append(LinkedList* list, int data) {
    Node* newNode = createNode(data);
    if (list->head == NULL) {
        list->head = newNode;
    } else {
        Node* current = list->head;
        while (current->next != NULL) {
            current = current->next;
        }
        current->next = newNode;
    }
    list->size++;
}

// Delete by value - O(n)
int deleteValue(LinkedList* list, int data) {
    if (list->head == NULL) return 0;
    
    if (list->head->data == data) {
        Node* temp = list->head;
        list->head = list->head->next;
        free(temp);
        list->size--;
        return 1;
    }
    
    Node* current = list->head;
    while (current->next != NULL && current->next->data != data) {
        current = current->next;
    }
    
    if (current->next != NULL) {
        Node* temp = current->next;
        current->next = current->next->next;
        free(temp);
        list->size--;
        return 1;
    }
    return 0;
}

// Search for value - O(n)
int find(LinkedList* list, int data) {
    Node* current = list->head;
    int index = 0;
    while (current != NULL) {
        if (current->data == data) {
            return index;
        }
        current = current->next;
        index++;
    }
    return -1;
}

// Display list
void display(LinkedList* list) {
    Node* current = list->head;
    printf("[");
    while (current != NULL) {
        printf("%d", current->data);
        if (current->next != NULL) {
            printf(", ");
        }
        current = current->next;
    }
    printf("]\\n");
}

// Free memory
void destroyLinkedList(LinkedList* list) {
    Node* current = list->head;
    while (current != NULL) {
        Node* temp = current;
        current = current->next;
        free(temp);
    }
    free(list);
}`
    },
    stack: {
        javascript: `// Stack Implementation (LIFO)
class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }

  // Push element to top - O(1)
  push(element) {
    this.top++;
    this.items[this.top] = element;
    return this.size();
  }

  // Pop element from top - O(1)
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const element = this.items[this.top];
    delete this.items[this.top];
    this.top--;
    return element;
  }

  // Peek at top element - O(1)
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items[this.top];
  }

  // Check if stack is empty - O(1)
  isEmpty() {
    return this.top === -1;
  }

  // Get stack size - O(1)
  size() {
    return this.top + 1;
  }

  // Clear stack - O(1)
  clear() {
    this.items = [];
    this.top = -1;
  }

  // Display stack contents
  display() {
    if (this.isEmpty()) {
      return [];
    }
    return this.items.slice(0, this.top + 1);
  }
}

// Example: Balanced Parentheses Check
function isBalanced(expression) {
  const stack = new Stack();
  const pairs = { '(': ')', '[': ']', '{': '}' };
  
  for (let char of expression) {
    if (pairs[char]) {
      stack.push(char);
    } else if (Object.values(pairs).includes(char)) {
      if (stack.isEmpty() || pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}`,
        python: `# Stack Implementation in Python
class Stack:
    def __init__(self):
        self.items = []
    
    # Push element to top - O(1)
    def push(self, element):
        self.items.append(element)
        return len(self.items)
    
    # Pop element from top - O(1)
    def pop(self):
        if self.is_empty():
            raise Exception("Stack is empty")
        return self.items.pop()
    
    # Peek at top element - O(1)
    def peek(self):
        if self.is_empty():
            raise Exception("Stack is empty")
        return self.items[-1]
    
    # Check if stack is empty - O(1)
    def is_empty(self):
        return len(self.items) == 0
    
    # Get stack size - O(1)
    def size(self):
        return len(self.items)
    
    # Clear stack - O(1)
    def clear(self):
        self.items = []
    
    # Display stack contents
    def display(self):
        return self.items.copy()

# Example: Balanced Parentheses Check
def is_balanced(expression):
    stack = Stack()
    pairs = {'(': ')', '[': ']', '{': '}'}
    
    for char in expression:
        if char in pairs:
            stack.push(char)
        elif char in pairs.values():
            if stack.is_empty() or pairs[stack.pop()] != char:
                return False
    
    return stack.is_empty()`,
        java: `// Stack Implementation in Java
import java.util.ArrayList;
import java.util.EmptyStackException;

public class Stack<T> {
    private ArrayList<T> items;
    
    public Stack() {
        items = new ArrayList<>();
    }
    
    // Push element to top - O(1)
    public int push(T element) {
        items.add(element);
        return items.size();
    }
    
    // Pop element from top - O(1)
    public T pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return items.remove(items.size() - 1);
    }
    
    // Peek at top element - O(1)
    public T peek() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return items.get(items.size() - 1);
    }
    
    // Check if stack is empty - O(1)
    public boolean isEmpty() {
        return items.isEmpty();
    }
    
    // Get stack size - O(1)
    public int size() {
        return items.size();
    }
    
    // Clear stack - O(1)
    public void clear() {
        items.clear();
    }
    
    // Display stack contents
    public ArrayList<T> display() {
        return new ArrayList<>(items);
    }
}

// Example: Balanced Parentheses Check
class BalancedParentheses {
    public static boolean isBalanced(String expression) {
        Stack<Character> stack = new Stack<>();
        String opening = "([{";
        String closing = ")]}";
        
        for (char c : expression.toCharArray()) {
            if (opening.indexOf(c) != -1) {
                stack.push(c);
            } else if (closing.indexOf(c) != -1) {
                if (stack.isEmpty()) return false;
                char top = stack.pop();
                if (opening.indexOf(top) != closing.indexOf(c)) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
}`,
        cpp: `// Stack Implementation in C++
#include <iostream>
#include <vector>
#include <stdexcept>

template<typename T>
class Stack {
private:
    std::vector<T> items;
    
public:
    // Push element to top - O(1)
    int push(T element) {
        items.push_back(element);
        return items.size();
    }
    
    // Pop element from top - O(1)
    T pop() {
        if (isEmpty()) {
            throw std::runtime_error("Stack is empty");
        }
        T element = items.back();
        items.pop_back();
        return element;
    }
    
    // Peek at top element - O(1)
    T peek() {
        if (isEmpty()) {
            throw std::runtime_error("Stack is empty");
        }
        return items.back();
    }
    
    // Check if stack is empty - O(1)
    bool isEmpty() {
        return items.empty();
    }
    
    // Get stack size - O(1)
    int size() {
        return items.size();
    }
    
    // Clear stack - O(1)
    void clear() {
        items.clear();
    }
    
    // Display stack contents
    std::vector<T> display() {
        return items;
    }
};

// Example: Balanced Parentheses Check
bool isBalanced(const std::string& expression) {
    Stack<char> stack;
    std::string opening = "([{";
    std::string closing = ")]}";
    
    for (char c : expression) {
        if (opening.find(c) != std::string::npos) {
            stack.push(c);
        } else if (closing.find(c) != std::string::npos) {
            if (stack.isEmpty()) return false;
            char top = stack.pop();
            if (opening.find(top) != closing.find(c)) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}`,
        c: `// Stack Implementation in C
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 1000

typedef struct {
    int items[MAX_SIZE];
    int top;
} Stack;

// Initialize stack
Stack* createStack() {
    Stack* stack = (Stack*)malloc(sizeof(Stack));
    stack->top = -1;
    return stack;
}

// Push element to top - O(1)
int push(Stack* stack, int element) {
    if (stack->top >= MAX_SIZE - 1) {
        printf("Stack overflow\\n");
        return -1;
    }
    stack->items[++stack->top] = element;
    return stack->top + 1;
}

// Pop element from top - O(1)
int pop(Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty\\n");
        return -1;
    }
    return stack->items[stack->top--];
}

// Peek at top element - O(1)
int peek(Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty\\n");
        return -1;
    }
    return stack->items[stack->top];
}

// Check if stack is empty - O(1)
bool isEmpty(Stack* stack) {
    return stack->top == -1;
}

// Get stack size - O(1)
int size(Stack* stack) {
    return stack->top + 1;
}

// Clear stack - O(1)
void clear(Stack* stack) {
    stack->top = -1;
}

// Display stack contents
void display(Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty\\n");
        return;
    }
    
    printf("Stack: [");
    for (int i = 0; i <= stack->top; i++) {
        printf("%d", stack->items[i]);
        if (i < stack->top) printf(", ");
    }
    printf("]\\n");
}

// Example: Balanced Parentheses Check
bool isBalanced(char* expression) {
    Stack* stack = createStack();
    
    for (int i = 0; expression[i] != '\\0'; i++) {
        char c = expression[i];
        
        if (c == '(' || c == '[' || c == '{') {
            push(stack, c);
        } else if (c == ')' || c == ']' || c == '}') {
            if (isEmpty(stack)) {
                free(stack);
                return false;
            }
            
            char top = pop(stack);
            if ((c == ')' && top != '(') ||
                (c == ']' && top != '[') ||
                (c == '}' && top != '{')) {
                free(stack);
                return false;
            }
        }
    }
    
    bool result = isEmpty(stack);
    free(stack);
    return result;
}

// Free memory
void destroyStack(Stack* stack) {
    free(stack);
}`
    },
    queue: {
        javascript: `// Queue Implementation (FIFO)
class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  // Add element to rear - O(1)
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
    return this.size();
  }

  // Remove element from front - O(1)
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const element = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    
    // Reset indices when queue becomes empty
    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    }
    
    return element;
  }

  // Peek at front element - O(1)
  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items[this.front];
  }

  // Check if queue is empty - O(1)
  isEmpty() {
    return this.rear === this.front;
  }

  // Get queue size - O(1)
  size() {
    return this.rear - this.front;
  }

  // Clear queue - O(1)
  clear() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  // Display queue contents
  display() {
    if (this.isEmpty()) {
      return [];
    }
    return Object.values(this.items).slice(this.front, this.rear);
  }
}

// Example: BFS Implementation
function breadthFirstSearch(graph, startNode) {
  const visited = new Set();
  const queue = new Queue();
  const result = [];
  
  queue.enqueue(startNode);
  visited.add(startNode);
  
  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();
    result.push(currentNode);
    
    for (let neighbor of graph[currentNode] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    }
  }
  
  return result;
}`,
        python: `# Queue Implementation in Python
from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()
    
    # Add element to rear - O(1)
    def enqueue(self, element):
        self.items.append(element)
        return len(self.items)
    
    # Remove element from front - O(1)
    def dequeue(self):
        if self.is_empty():
            raise Exception("Queue is empty")
        return self.items.popleft()
    
    # Peek at front element - O(1)
    def peek(self):
        if self.is_empty():
            raise Exception("Queue is empty")
        return self.items[0]
    
    # Check if queue is empty - O(1)
    def is_empty(self):
        return len(self.items) == 0
    
    # Get queue size - O(1)
    def size(self):
        return len(self.items)
    
    # Clear queue - O(1)
    def clear(self):
        self.items.clear()
    
    # Display queue contents
    def display(self):
        return list(self.items)

# Example: BFS Implementation
def breadth_first_search(graph, start_node):
    visited = set()
    queue = Queue()
    result = []
    
    queue.enqueue(start_node)
    visited.add(start_node)
    
    while not queue.is_empty():
        current_node = queue.dequeue()
        result.append(current_node)
        
        for neighbor in graph.get(current_node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.enqueue(neighbor)
    
    return result`,
        java: `// Queue Implementation in Java
import java.util.ArrayList;
import java.util.NoSuchElementException;

public class Queue<T> {
    private ArrayList<T> items;
    private int front;
    private int rear;
    
    public Queue() {
        items = new ArrayList<>();
        front = 0;
        rear = 0;
    }
    
    // Add element to rear - O(1)
    public int enqueue(T element) {
        if (rear >= items.size()) {
            items.add(element);
        } else {
            items.set(rear, element);
        }
        rear++;
        return size();
    }
    
    // Remove element from front - O(1)
    public T dequeue() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        T element = items.get(front);
        items.set(front, null); // Help GC
        front++;
        
        // Reset indices when queue becomes empty
        if (front == rear) {
            front = 0;
            rear = 0;
            items.clear();
        }
        
        return element;
    }
    
    // Peek at front element - O(1)
    public T peek() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        return items.get(front);
    }
    
    // Check if queue is empty - O(1)
    public boolean isEmpty() {
        return front == rear;
    }
    
    // Get queue size - O(1)
    public int size() {
        return rear - front;
    }
    
    // Clear queue - O(1)
    public void clear() {
        items.clear();
        front = 0;
        rear = 0;
    }
    
    // Display queue contents
    public ArrayList<T> display() {
        ArrayList<T> result = new ArrayList<>();
        for (int i = front; i < rear; i++) {
            result.add(items.get(i));
        }
        return result;
    }
}`,
        cpp: `// Queue Implementation in C++
#include <iostream>
#include <vector>
#include <stdexcept>

template<typename T>
class Queue {
private:
    std::vector<T> items;
    int front;
    int rear;
    
public:
    Queue() : front(0), rear(0) {}
    
    // Add element to rear - O(1)
    int enqueue(T element) {
        if (rear >= items.size()) {
            items.push_back(element);
        } else {
            items[rear] = element;
        }
        rear++;
        return size();
    }
    
    // Remove element from front - O(1)
    T dequeue() {
        if (isEmpty()) {
            throw std::runtime_error("Queue is empty");
        }
        
        T element = items[front];
        front++;
        
        // Reset indices when queue becomes empty
        if (front == rear) {
            front = 0;
            rear = 0;
            items.clear();
        }
        
        return element;
    }
    
    // Peek at front element - O(1)
    T peek() {
        if (isEmpty()) {
            throw std::runtime_error("Queue is empty");
        }
        return items[front];
    }
    
    // Check if queue is empty - O(1)
    bool isEmpty() {
        return front == rear;
    }
    
    // Get queue size - O(1)
    int size() {
        return rear - front;
    }
    
    // Clear queue - O(1)
    void clear() {
        items.clear();
        front = 0;
        rear = 0;
    }
    
    // Display queue contents
    std::vector<T> display() {
        std::vector<T> result;
        for (int i = front; i < rear; i++) {
            result.push_back(items[i]);
        }
        return result;
    }
};`,
        c: `// Queue Implementation in C
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 1000

typedef struct {
    int items[MAX_SIZE];
    int front;
    int rear;
} Queue;

// Initialize queue
Queue* createQueue() {
    Queue* queue = (Queue*)malloc(sizeof(Queue));
    queue->front = 0;
    queue->rear = 0;
    return queue;
}

// Add element to rear - O(1)
int enqueue(Queue* queue, int element) {
    if (queue->rear >= MAX_SIZE) {
        printf("Queue overflow\\n");
        return -1;
    }
    queue->items[queue->rear] = element;
    queue->rear++;
    return queue->rear - queue->front;
}

// Remove element from front - O(1)
int dequeue(Queue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty\\n");
        return -1;
    }
    
    int element = queue->items[queue->front];
    queue->front++;
    
    // Reset indices when queue becomes empty
    if (queue->front == queue->rear) {
        queue->front = 0;
        queue->rear = 0;
    }
    
    return element;
}

// Peek at front element - O(1)
int peek(Queue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty\\n");
        return -1;
    }
    return queue->items[queue->front];
}

// Check if queue is empty - O(1)
bool isEmpty(Queue* queue) {
    return queue->front == queue->rear;
}

// Get queue size - O(1)
int size(Queue* queue) {
    return queue->rear - queue->front;
}

// Clear queue - O(1)
void clear(Queue* queue) {
    queue->front = 0;
    queue->rear = 0;
}

// Display queue contents
void display(Queue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty\\n");
        return;
    }
    
    printf("Queue: [");
    for (int i = queue->front; i < queue->rear; i++) {
        printf("%d", queue->items[i]);
        if (i < queue->rear - 1) printf(", ");
    }
    printf("]\\n");
}

// Free memory
void destroyQueue(Queue* queue) {
    free(queue);
}`
    },
    'binary-tree': {
        javascript: `// Binary Tree Implementation
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert node (level-order insertion)
  insert(data) {
    const newNode = new TreeNode(data);
    
    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      
      if (!current.left) {
        current.left = newNode;
        return;
      } else if (!current.right) {
        current.right = newNode;
        return;
      }
      
      queue.push(current.left);
      queue.push(current.right);
    }
  }

  // In-order traversal (Left, Root, Right)
  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.data);
      this.inOrder(node.right, result);
    }
    return result;
  }

  // Pre-order traversal (Root, Left, Right)
  preOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.data);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }

  // Post-order traversal (Left, Right, Root)
  postOrder(node = this.root, result = []) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.data);
    }
    return result;
  }

  // Level-order traversal
  levelOrder() {
    if (!this.root) return [];
    
    const result = [];
    const queue = [this.root];
    
    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.data);
      
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    
    return result;
  }

  // Search for a value
  search(data, node = this.root) {
    if (!node) return false;
    if (node.data === data) return true;
    
    return this.search(data, node.left) || this.search(data, node.right);
  }

  // Get tree height
  height(node = this.root) {
    if (!node) return -1;
    
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    
    return Math.max(leftHeight, rightHeight) + 1;
  }
}`,
        python: `# Binary Tree Implementation in Python
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None
    
    # Insert node (level-order insertion)
    def insert(self, data):
        new_node = TreeNode(data)
        
        if not self.root:
            self.root = new_node
            return
        
        queue = [self.root]
        while queue:
            current = queue.pop(0)
            
            if not current.left:
                current.left = new_node
                return
            elif not current.right:
                current.right = new_node
                return
            
            queue.append(current.left)
            queue.append(current.right)
    
    # In-order traversal (Left, Root, Right)
    def in_order(self, node=None, result=None):
        if result is None:
            result = []
        if node is None:
            node = self.root
            
        if node:
            self.in_order(node.left, result)
            result.append(node.data)
            self.in_order(node.right, result)
        
        return result
    
    # Pre-order traversal (Root, Left, Right)
    def pre_order(self, node=None, result=None):
        if result is None:
            result = []
        if node is None:
            node = self.root
            
        if node:
            result.append(node.data)
            self.pre_order(node.left, result)
            self.pre_order(node.right, result)
        
        return result
    
    # Post-order traversal (Left, Right, Root)
    def post_order(self, node=None, result=None):
        if result is None:
            result = []
        if node is None:
            node = self.root
            
        if node:
            self.post_order(node.left, result)
            self.post_order(node.right, result)
            result.append(node.data)
        
        return result
    
    # Level-order traversal
    def level_order(self):
        if not self.root:
            return []
        
        result = []
        queue = [self.root]
        
        while queue:
            current = queue.pop(0)
            result.append(current.data)
            
            if current.left:
                queue.append(current.left)
            if current.right:
                queue.append(current.right)
        
        return result
    
    # Search for a value
    def search(self, data, node=None):
        if node is None:
            node = self.root
            
        if not node:
            return False
        if node.data == data:
            return True
        
        return self.search(data, node.left) or self.search(data, node.right)
    
    # Get tree height
    def height(self, node=None):
        if node is None:
            node = self.root
            
        if not node:
            return -1
        
        left_height = self.height(node.left)
        right_height = self.height(node.right)
        
        return max(left_height, right_height) + 1`,
        java: `// Binary Tree Implementation in Java
import java.util.*;

class TreeNode<T> {
    T data;
    TreeNode<T> left;
    TreeNode<T> right;
    
    public TreeNode(T data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

public class BinaryTree<T> {
    private TreeNode<T> root;
    
    public BinaryTree() {
        this.root = null;
    }
    
    // Insert node (level-order insertion)
    public void insert(T data) {
        TreeNode<T> newNode = new TreeNode<>(data);
        
        if (root == null) {
            root = newNode;
            return;
        }
        
        Queue<TreeNode<T>> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            TreeNode<T> current = queue.poll();
            
            if (current.left == null) {
                current.left = newNode;
                return;
            } else if (current.right == null) {
                current.right = newNode;
                return;
            }
            
            queue.offer(current.left);
            queue.offer(current.right);
        }
    }
    
    // In-order traversal (Left, Root, Right)
    public List<T> inOrder() {
        List<T> result = new ArrayList<>();
        inOrderHelper(root, result);
        return result;
    }
    
    private void inOrderHelper(TreeNode<T> node, List<T> result) {
        if (node != null) {
            inOrderHelper(node.left, result);
            result.add(node.data);
            inOrderHelper(node.right, result);
        }
    }
    
    // Pre-order traversal (Root, Left, Right)
    public List<T> preOrder() {
        List<T> result = new ArrayList<>();
        preOrderHelper(root, result);
        return result;
    }
    
    private void preOrderHelper(TreeNode<T> node, List<T> result) {
        if (node != null) {
            result.add(node.data);
            preOrderHelper(node.left, result);
            preOrderHelper(node.right, result);
        }
    }
    
    // Post-order traversal (Left, Right, Root)
    public List<T> postOrder() {
        List<T> result = new ArrayList<>();
        postOrderHelper(root, result);
        return result;
    }
    
    private void postOrderHelper(TreeNode<T> node, List<T> result) {
        if (node != null) {
            postOrderHelper(node.left, result);
            postOrderHelper(node.right, result);
            result.add(node.data);
        }
    }
    
    // Level-order traversal
    public List<T> levelOrder() {
        List<T> result = new ArrayList<>();
        if (root == null) return result;
        
        Queue<TreeNode<T>> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            TreeNode<T> current = queue.poll();
            result.add(current.data);
            
            if (current.left != null) queue.offer(current.left);
            if (current.right != null) queue.offer(current.right);
        }
        
        return result;
    }
    
    // Search for a value
    public boolean search(T data) {
        return searchHelper(root, data);
    }
    
    private boolean searchHelper(TreeNode<T> node, T data) {
        if (node == null) return false;
        if (node.data.equals(data)) return true;
        
        return searchHelper(node.left, data) || searchHelper(node.right, data);
    }
    
    // Get tree height
    public int height() {
        return heightHelper(root);
    }
    
    private int heightHelper(TreeNode<T> node) {
        if (node == null) return -1;
        
        int leftHeight = heightHelper(node.left);
        int rightHeight = heightHelper(node.right);
        
        return Math.max(leftHeight, rightHeight) + 1;
    }
}`,
        cpp: `// Binary Tree Implementation in C++
#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

template<typename T>
class TreeNode {
public:
    T data;
    TreeNode* left;
    TreeNode* right;
    
    TreeNode(T data) : data(data), left(nullptr), right(nullptr) {}
};

template<typename T>
class BinaryTree {
private:
    TreeNode<T>* root;
    
    void inOrderHelper(TreeNode<T>* node, std::vector<T>& result) {
        if (node) {
            inOrderHelper(node->left, result);
            result.push_back(node->data);
            inOrderHelper(node->right, result);
        }
    }
    
    void preOrderHelper(TreeNode<T>* node, std::vector<T>& result) {
        if (node) {
            result.push_back(node->data);
            preOrderHelper(node->left, result);
            preOrderHelper(node->right, result);
        }
    }
    
    void postOrderHelper(TreeNode<T>* node, std::vector<T>& result) {
        if (node) {
            postOrderHelper(node->left, result);
            postOrderHelper(node->right, result);
            result.push_back(node->data);
        }
    }
    
    bool searchHelper(TreeNode<T>* node, T data) {
        if (!node) return false;
        if (node->data == data) return true;
        
        return searchHelper(node->left, data) || searchHelper(node->right, data);
    }
    
    int heightHelper(TreeNode<T>* node) {
        if (!node) return -1;
        
        int leftHeight = heightHelper(node->left);
        int rightHeight = heightHelper(node->right);
        
        return std::max(leftHeight, rightHeight) + 1;
    }
    
    void destroyTree(TreeNode<T>* node) {
        if (node) {
            destroyTree(node->left);
            destroyTree(node->right);
            delete node;
        }
    }
    
public:
    BinaryTree() : root(nullptr) {}
    
    ~BinaryTree() {
        destroyTree(root);
    }
    
    // Insert node (level-order insertion)
    void insert(T data) {
        TreeNode<T>* newNode = new TreeNode<T>(data);
        
        if (!root) {
            root = newNode;
            return;
        }
        
        std::queue<TreeNode<T>*> queue;
        queue.push(root);
        
        while (!queue.empty()) {
            TreeNode<T>* current = queue.front();
            queue.pop();
            
            if (!current->left) {
                current->left = newNode;
                return;
            } else if (!current->right) {
                current->right = newNode;
                return;
            }
            
            queue.push(current->left);
            queue.push(current->right);
        }
    }
    
    // In-order traversal (Left, Root, Right)
    std::vector<T> inOrder() {
        std::vector<T> result;
        inOrderHelper(root, result);
        return result;
    }
    
    // Pre-order traversal (Root, Left, Right)
    std::vector<T> preOrder() {
        std::vector<T> result;
        preOrderHelper(root, result);
        return result;
    }
    
    // Post-order traversal (Left, Right, Root)
    std::vector<T> postOrder() {
        std::vector<T> result;
        postOrderHelper(root, result);
        return result;
    }
    
    // Level-order traversal
    std::vector<T> levelOrder() {
        std::vector<T> result;
        if (!root) return result;
        
        std::queue<TreeNode<T>*> queue;
        queue.push(root);
        
        while (!queue.empty()) {
            TreeNode<T>* current = queue.front();
            queue.pop();
            result.push_back(current->data);
            
            if (current->left) queue.push(current->left);
            if (current->right) queue.push(current->right);
        }
        
        return result;
    }
    
    // Search for a value
    bool search(T data) {
        return searchHelper(root, data);
    }
    
    // Get tree height
    int height() {
        return heightHelper(root);
    }
};`,
        c: `// Binary Tree Implementation in C
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
} TreeNode;

typedef struct {
    TreeNode* root;
} BinaryTree;

// Create new tree node
TreeNode* createNode(int data) {
    TreeNode* newNode = (TreeNode*)malloc(sizeof(TreeNode));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// Initialize binary tree
BinaryTree* createBinaryTree() {
    BinaryTree* tree = (BinaryTree*)malloc(sizeof(BinaryTree));
    tree->root = NULL;
    return tree;
}

// Simple queue for level-order operations
typedef struct QueueNode {
    TreeNode* treeNode;
    struct QueueNode* next;
} QueueNode;

typedef struct {
    QueueNode* front;
    QueueNode* rear;
} Queue;

Queue* createQueue() {
    Queue* queue = (Queue*)malloc(sizeof(Queue));
    queue->front = NULL;
    queue->rear = NULL;
    return queue;
}

void enqueue(Queue* queue, TreeNode* node) {
    QueueNode* newNode = (QueueNode*)malloc(sizeof(QueueNode));
    newNode->treeNode = node;
    newNode->next = NULL;
    
    if (queue->rear == NULL) {
        queue->front = queue->rear = newNode;
    } else {
        queue->rear->next = newNode;
        queue->rear = newNode;
    }
}

TreeNode* dequeue(Queue* queue) {
    if (queue->front == NULL) return NULL;
    
    QueueNode* temp = queue->front;
    TreeNode* node = temp->treeNode;
    queue->front = queue->front->next;
    
    if (queue->front == NULL) {
        queue->rear = NULL;
    }
    
    free(temp);
    return node;
}

bool isQueueEmpty(Queue* queue) {
    return queue->front == NULL;
}

// Insert node (level-order insertion)
void insert(BinaryTree* tree, int data) {
    TreeNode* newNode = createNode(data);
    
    if (tree->root == NULL) {
        tree->root = newNode;
        return;
    }
    
    Queue* queue = createQueue();
    enqueue(queue, tree->root);
    
    while (!isQueueEmpty(queue)) {
        TreeNode* current = dequeue(queue);
        
        if (current->left == NULL) {
            current->left = newNode;
            free(queue);
            return;
        } else if (current->right == NULL) {
            current->right = newNode;
            free(queue);
            return;
        }
        
        enqueue(queue, current->left);
        enqueue(queue, current->right);
    }
    
    free(queue);
}

// In-order traversal (Left, Root, Right)
void inOrder(TreeNode* node) {
    if (node != NULL) {
        inOrder(node->left);
        printf("%d ", node->data);
        inOrder(node->right);
    }
}

// Pre-order traversal (Root, Left, Right)
void preOrder(TreeNode* node) {
    if (node != NULL) {
        printf("%d ", node->data);
        preOrder(node->left);
        preOrder(node->right);
    }
}

// Post-order traversal (Left, Right, Root)
void postOrder(TreeNode* node) {
    if (node != NULL) {
        postOrder(node->left);
        postOrder(node->right);
        printf("%d ", node->data);
    }
}

// Level-order traversal
void levelOrder(BinaryTree* tree) {
    if (tree->root == NULL) return;
    
    Queue* queue = createQueue();
    enqueue(queue, tree->root);
    
    while (!isQueueEmpty(queue)) {
        TreeNode* current = dequeue(queue);
        printf("%d ", current->data);
        
        if (current->left) enqueue(queue, current->left);
        if (current->right) enqueue(queue, current->right);
    }
    
    free(queue);
}

// Search for a value
bool search(TreeNode* node, int data) {
    if (node == NULL) return false;
    if (node->data == data) return true;
    
    return search(node->left, data) || search(node->right, data);
}

// Get tree height
int height(TreeNode* node) {
    if (node == NULL) return -1;
    
    int leftHeight = height(node->left);
    int rightHeight = height(node->right);
    
    return (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
}

// Free tree memory
void destroyTree(TreeNode* node) {
    if (node != NULL) {
        destroyTree(node->left);
        destroyTree(node->right);
        free(node);
    }
}

void destroyBinaryTree(BinaryTree* tree) {
    destroyTree(tree->root);
    free(tree);
}`
    },
    'hash-table': {
        javascript: `// Hash Table Implementation
class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => []);
    this.count = 0;
  }

  // Simple hash function
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  // Insert key-value pair - O(1) average
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    // Check if key already exists
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value; // Update existing
        return;
      }
    }
    
    // Add new key-value pair
    bucket.push([key, value]);
    this.count++;
    
    // Resize if load factor > 0.75
    if (this.count > this.size * 0.75) {
      this.resize();
    }
  }

  // Get value by key - O(1) average
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
  }

  // Delete key-value pair - O(1) average
  delete(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.count--;
        return true;
      }
    }
    return false;
  }

  // Check if key exists
  has(key) {
    return this.get(key) !== undefined;
  }

  // Resize hash table
  resize() {
    const oldBuckets = this.buckets;
    this.size *= 2;
    this.buckets = new Array(this.size).fill(null).map(() => []);
    this.count = 0;
    
    // Rehash all elements
    for (let bucket of oldBuckets) {
      for (let [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }

  // Get all keys
  keys() {
    const keys = [];
    for (let bucket of this.buckets) {
      for (let [key] of bucket) {
        keys.push(key);
      }
    }
    return keys;
  }

  // Get all values
  values() {
    const values = [];
    for (let bucket of this.buckets) {
      for (let [, value] of bucket) {
        values.push(value);
      }
    }
    return values;
  }

  // Display hash table state
  display() {
    const result = {};
    for (let bucket of this.buckets) {
      for (let [key, value] of bucket) {
        result[key] = value;
      }
    }
    return result;
  }
}`,
        python: `# Hash Table Implementation in Python
class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.buckets = [[] for _ in range(size)]
        self.count = 0
    
    # Simple hash function
    def _hash(self, key):
        hash_value = 0
        for i, char in enumerate(key):
            hash_value = (hash_value + ord(char) * i) % self.size
        return hash_value
    
    # Insert key-value pair - O(1) average
    def set(self, key, value):
        index = self._hash(key)
        bucket = self.buckets[index]
        
        # Check if key already exists
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)  # Update existing
                return
        
        # Add new key-value pair
        bucket.append((key, value))
        self.count += 1
        
        # Resize if load factor > 0.75
        if self.count > self.size * 0.75:
            self._resize()
    
    # Get value by key - O(1) average
    def get(self, key):
        index = self._hash(key)
        bucket = self.buckets[index]
        
        for k, v in bucket:
            if k == key:
                return v
        return None
    
    # Delete key-value pair - O(1) average
    def delete(self, key):
        index = self._hash(key)
        bucket = self.buckets[index]
        
        for i, (k, v) in enumerate(bucket):
            if k == key:
                del bucket[i]
                self.count -= 1
                return True
        return False
    
    # Check if key exists
    def has(self, key):
        return self.get(key) is not None
    
    # Resize hash table
    def _resize(self):
        old_buckets = self.buckets
        self.size *= 2
        self.buckets = [[] for _ in range(self.size)]
        self.count = 0
        
        # Rehash all elements
        for bucket in old_buckets:
            for key, value in bucket:
                self.set(key, value)
    
    # Get all keys
    def keys(self):
        keys = []
        for bucket in self.buckets:
            for key, _ in bucket:
                keys.append(key)
        return keys
    
    # Get all values
    def values(self):
        values = []
        for bucket in self.buckets:
            for _, value in bucket:
                values.append(value)
        return values
    
    # Display hash table state
    def display(self):
        result = {}
        for bucket in self.buckets:
            for key, value in bucket:
                result[key] = value
        return result`,
        java: `// Hash Table Implementation in Java
import java.util.*;

public class HashTable<K, V> {
    private static class Entry<K, V> {
        K key;
        V value;
        
        Entry(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private ArrayList<LinkedList<Entry<K, V>>> buckets;
    private int size;
    private int count;
    
    public HashTable() {
        this(10);
    }
    
    public HashTable(int size) {
        this.size = size;
        this.count = 0;
        this.buckets = new ArrayList<>(size);
        
        for (int i = 0; i < size; i++) {
            buckets.add(new LinkedList<>());
        }
    }
    
    // Simple hash function
    private int hash(K key) {
        int hash = 0;
        String keyStr = key.toString();
        for (int i = 0; i < keyStr.length(); i++) {
            hash = (hash + keyStr.charAt(i) * i) % size;
        }
        return Math.abs(hash);
    }
    
    // Insert key-value pair - O(1) average
    public void set(K key, V value) {
        int index = hash(key);
        LinkedList<Entry<K, V>> bucket = buckets.get(index);
        
        // Check if key already exists
        for (Entry<K, V> entry : bucket) {
            if (entry.key.equals(key)) {
                entry.value = value; // Update existing
                return;
            }
        }
        
        // Add new key-value pair
        bucket.add(new Entry<>(key, value));
        count++;
        
        // Resize if load factor > 0.75
        if (count > size * 0.75) {
            resize();
        }
    }
    
    // Get value by key - O(1) average
    public V get(K key) {
        int index = hash(key);
        LinkedList<Entry<K, V>> bucket = buckets.get(index);
        
        for (Entry<K, V> entry : bucket) {
            if (entry.key.equals(key)) {
                return entry.value;
            }
        }
        return null;
    }
    
    // Delete key-value pair - O(1) average
    public boolean delete(K key) {
        int index = hash(key);
        LinkedList<Entry<K, V>> bucket = buckets.get(index);
        
        Iterator<Entry<K, V>> iterator = bucket.iterator();
        while (iterator.hasNext()) {
            Entry<K, V> entry = iterator.next();
            if (entry.key.equals(key)) {
                iterator.remove();
                count--;
                return true;
            }
        }
        return false;
    }
    
    // Check if key exists
    public boolean has(K key) {
        return get(key) != null;
    }
    
    // Resize hash table
    private void resize() {
        ArrayList<LinkedList<Entry<K, V>>> oldBuckets = buckets;
        size *= 2;
        count = 0;
        buckets = new ArrayList<>(size);
        
        for (int i = 0; i < size; i++) {
            buckets.add(new LinkedList<>());
        }
        
        // Rehash all elements
        for (LinkedList<Entry<K, V>> bucket : oldBuckets) {
            for (Entry<K, V> entry : bucket) {
                set(entry.key, entry.value);
            }
        }
    }
    
    // Get all keys
    public List<K> keys() {
        List<K> keys = new ArrayList<>();
        for (LinkedList<Entry<K, V>> bucket : buckets) {
            for (Entry<K, V> entry : bucket) {
                keys.add(entry.key);
            }
        }
        return keys;
    }
    
    // Get all values
    public List<V> values() {
        List<V> values = new ArrayList<>();
        for (LinkedList<Entry<K, V>> bucket : buckets) {
            for (Entry<K, V> entry : bucket) {
                values.add(entry.value);
            }
        }
        return values;
    }
    
    public int size() {
        return count;
    }
}`,
        cpp: `// Hash Table Implementation in C++
#include <iostream>
#include <vector>
#include <list>
#include <string>

template<typename K, typename V>
class HashTable {
private:
    struct Entry {
        K key;
        V value;
        
        Entry(K k, V v) : key(k), value(v) {}
    };
    
    std::vector<std::list<Entry>> buckets;
    int size;
    int count;
    
    // Simple hash function
    int hash(K key) {
        std::string keyStr = std::to_string(key);
        int hash = 0;
        for (int i = 0; i < keyStr.length(); i++) {
            hash = (hash + keyStr[i] * i) % size;
        }
        return abs(hash);
    }
    
    // Resize hash table
    void resize() {
        std::vector<std::list<Entry>> oldBuckets = buckets;
        size *= 2;
        count = 0;
        buckets.clear();
        buckets.resize(size);
        
        // Rehash all elements
        for (auto& bucket : oldBuckets) {
            for (auto& entry : bucket) {
                set(entry.key, entry.value);
            }
        }
    }
    
public:
    HashTable(int size = 10) : size(size), count(0) {
        buckets.resize(size);
    }
    
    // Insert key-value pair - O(1) average
    void set(K key, V value) {
        int index = hash(key);
        auto& bucket = buckets[index];
        
        // Check if key already exists
        for (auto& entry : bucket) {
            if (entry.key == key) {
                entry.value = value; // Update existing
                return;
            }
        }
        
        // Add new key-value pair
        bucket.emplace_back(key, value);
        count++;
        
        // Resize if load factor > 0.75
        if (count > size * 0.75) {
            resize();
        }
    }
    
    // Get value by key - O(1) average
    V get(K key) {
        int index = hash(key);
        auto& bucket = buckets[index];
        
        for (auto& entry : bucket) {
            if (entry.key == key) {
                return entry.value;
            }
        }
        throw std::runtime_error("Key not found");
    }
    
    // Delete key-value pair - O(1) average
    bool deleteKey(K key) {
        int index = hash(key);
        auto& bucket = buckets[index];
        
        for (auto it = bucket.begin(); it != bucket.end(); ++it) {
            if (it->key == key) {
                bucket.erase(it);
                count--;
                return true;
            }
        }
        return false;
    }
    
    // Check if key exists
    bool has(K key) {
        try {
            get(key);
            return true;
        } catch (const std::runtime_error&) {
            return false;
        }
    }
    
    // Get all keys
    std::vector<K> keys() {
        std::vector<K> keys;
        for (auto& bucket : buckets) {
            for (auto& entry : bucket) {
                keys.push_back(entry.key);
            }
        }
        return keys;
    }
    
    // Get all values
    std::vector<V> values() {
        std::vector<V> values;
        for (auto& bucket : buckets) {
            for (auto& entry : bucket) {
                values.push_back(entry.value);
            }
        }
        return values;
    }
    
    int getSize() const {
        return count;
    }
};`,
        c: `// Hash Table Implementation in C
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#define INITIAL_SIZE 10

typedef struct Entry {
    char* key;
    int value;
    struct Entry* next;
} Entry;

typedef struct {
    Entry** buckets;
    int size;
    int count;
} HashTable;

// Simple hash function
unsigned int hash(const char* key, int size) {
    unsigned int hash = 0;
    for (int i = 0; key[i] != '\\0'; i++) {
        hash = (hash + key[i] * i) % size;
    }
    return hash;
}

// Create new entry
Entry* createEntry(const char* key, int value) {
    Entry* entry = (Entry*)malloc(sizeof(Entry));
    entry->key = (char*)malloc(strlen(key) + 1);
    strcpy(entry->key, key);
    entry->value = value;
    entry->next = NULL;
    return entry;
}

// Initialize hash table
HashTable* createHashTable() {
    HashTable* table = (HashTable*)malloc(sizeof(HashTable));
    table->size = INITIAL_SIZE;
    table->count = 0;
    table->buckets = (Entry**)calloc(table->size, sizeof(Entry*));
    return table;
}

// Insert key-value pair - O(1) average
void set(HashTable* table, const char* key, int value) {
    unsigned int index = hash(key, table->size);
    Entry* current = table->buckets[index];
    
    // Check if key already exists
    while (current != NULL) {
        if (strcmp(current->key, key) == 0) {
            current->value = value; // Update existing
            return;
        }
        current = current->next;
    }
    
    // Add new key-value pair
    Entry* newEntry = createEntry(key, value);
    newEntry->next = table->buckets[index];
    table->buckets[index] = newEntry;
    table->count++;
}

// Get value by key - O(1) average
int get(HashTable* table, const char* key, bool* found) {
    unsigned int index = hash(key, table->size);
    Entry* current = table->buckets[index];
    
    while (current != NULL) {
        if (strcmp(current->key, key) == 0) {
            *found = true;
            return current->value;
        }
        current = current->next;
    }
    
    *found = false;
    return -1;
}

// Delete key-value pair - O(1) average
bool deleteKey(HashTable* table, const char* key) {
    unsigned int index = hash(key, table->size);
    Entry* current = table->buckets[index];
    Entry* prev = NULL;
    
    while (current != NULL) {
        if (strcmp(current->key, key) == 0) {
            if (prev == NULL) {
                table->buckets[index] = current->next;
            } else {
                prev->next = current->next;
            }
            
            free(current->key);
            free(current);
            table->count--;
            return true;
        }
        prev = current;
        current = current->next;
    }
    
    return false;
}

// Check if key exists
bool has(HashTable* table, const char* key) {
    bool found;
    get(table, key, &found);
    return found;
}

// Display hash table contents
void display(HashTable* table) {
    printf("Hash Table Contents:\\n");
    for (int i = 0; i < table->size; i++) {
        Entry* current = table->buckets[i];
        if (current != NULL) {
            printf("Bucket %d: ", i);
            while (current != NULL) {
                printf("(%s: %d) ", current->key, current->value);
                current = current->next;
            }
            printf("\\n");
        }
    }
}

// Free hash table memory
void destroyHashTable(HashTable* table) {
    for (int i = 0; i < table->size; i++) {
        Entry* current = table->buckets[i];
        while (current != NULL) {
            Entry* temp = current;
            current = current->next;
            free(temp->key);
            free(temp);
        }
    }
    free(table->buckets);
    free(table);
}`
    }
};

// Global variables
let filteredStructures = [...dataStructures];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const complexityFilter = document.getElementById('complexityFilter');
const structuresGrid = document.getElementById('structuresGrid');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderStructures();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    complexityFilter.addEventListener('change', handleFilter);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    filterStructures(searchTerm, complexityFilter.value);
}

// Handle complexity filter
function handleFilter() {
    const searchTerm = searchInput.value.toLowerCase();
    filterStructures(searchTerm, complexityFilter.value);
}

// Filter data structures based on search and complexity
function filterStructures(searchTerm, selectedComplexity) {
    filteredStructures = dataStructures.filter(structure => {
        const matchesSearch = structure.name.toLowerCase().includes(searchTerm) ||
                            structure.description.toLowerCase().includes(searchTerm);
        
        const matchesComplexity = !selectedComplexity || 
                                Object.values(structure.timeComplexity).some(complexity => 
                                    complexity && complexity.includes(selectedComplexity)
                                );
        
        return matchesSearch && matchesComplexity;
    });
    
    renderStructures();
}

// Render data structure cards
function renderStructures() {
    if (filteredStructures.length === 0) {
        structuresGrid.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <div class="no-results-title">No data structures found</div>
                <p class="no-results-description">Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    structuresGrid.innerHTML = filteredStructures.map(structure => 
        createStructureCard(structure)
    ).join('');
    
    // Add event listeners to expand buttons
    document.querySelectorAll('.expand-btn').forEach(btn => {
        btn.addEventListener('click', handleCardExpand);
    });
    
    // Add event listeners to tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', handleTabSwitch);
    });
    
    // Add event listeners to language tabs
    document.querySelectorAll('.language-tab').forEach(btn => {
        btn.addEventListener('click', handleLanguageSwitch);
    });
    
    // Add event listeners to copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', handleCodeCopy);
    });
    
    // Add event listeners to web challenge buttons
    document.querySelectorAll('.web-challenge-btn').forEach(btn => {
        btn.addEventListener('click', handleWebChallenge);
    });
}

// Create structure card HTML
function createStructureCard(structure) {
    return `
        <div class="structure-card" data-id="${structure.id}">
            <div class="card-header">
                <div class="card-title">
                    <h3>${structure.name}</h3>
                    <button class="expand-btn" data-id="${structure.id}">
                        Explore
                    </button>
                </div>
                <p class="card-description">${structure.description}</p>
            </div>
            
            <div class="card-content" id="content-${structure.id}" style="display: none;">
                <div class="tabs">
                    <button class="tab-btn active" data-tab="overview" data-id="${structure.id}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                        </svg>
                        Overview
                    </button>
                    <button class="tab-btn" data-tab="implementation" data-id="${structure.id}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="16,18 22,12 16,6"></polyline>
                            <polyline points="8,6 2,12 8,18"></polyline>
                        </svg>
                        Implementation
                    </button>
                    <button class="tab-btn" data-tab="complexity" data-id="${structure.id}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12,6 12,12 16,14"></polyline>
                        </svg>
                        Complexity
                    </button>
                </div>
                
                <div class="tab-content">
                    ${createOverviewTab(structure)}
                    ${createImplementationTab(structure)}
                    ${createComplexityTab(structure)}
                </div>
            </div>
        </div>
    `;
}

// Create overview tab content
function createOverviewTab(structure) {
    return `
        <div class="tab-pane active" id="overview-${structure.id}">
            <div class="overview-section advantages">
                <h4>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22,4 12,14.01 9,11.01"></polyline>
                    </svg>
                    Advantages
                </h4>
                <ul class="overview-list">
                    ${structure.advantages.map(advantage => `<li>${advantage}</li>`).join('')}
                </ul>
            </div>
            
            <div class="overview-section disadvantages">
                <h4>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    Disadvantages
                </h4>
                <ul class="overview-list">
                    ${structure.disadvantages.map(disadvantage => `<li>${disadvantage}</li>`).join('')}
                </ul>
            </div>
            
            <div class="overview-section use-cases">
                <h4>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
                    </svg>
                    Common Use Cases
                </h4>
                <ul class="overview-list">
                    ${structure.useCases.map(useCase => `<li>${useCase}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

// Create implementation tab content
function createImplementationTab(structure) {
    const languages = ['javascript', 'python', 'java', 'cpp', 'c'];
    
    return `
        <div class="tab-pane" id="implementation-${structure.id}">
            <h4>Multi-Language Implementation</h4>
            
            <div class="language-tabs">
                ${languages.map((lang, index) => `
                    <button class="language-tab ${index === 0 ? 'active' : ''}" 
                            data-language="${lang}" 
                            data-structure="${structure.id}">
                        ${lang.toUpperCase()}
                    </button>
                `).join('')}
            </div>
            
            ${languages.map((lang, index) => `
                <div class="language-content ${index === 0 ? 'active' : ''}" 
                     id="lang-${lang}-${structure.id}">
                    ${createCodeBlock(structure.id, lang)}
                </div>
            `).join('')}
            
            <a href="challenges/${structure.id}.html" class="web-challenge-btn" data-structure="${structure.id}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
                </svg>
                Try Interactive Web Challenge
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17l9.2-9.2M17 17V7H7"></path>
                </svg>
            </a>
        </div>
    `;
}

// Create complexity tab content
function createComplexityTab(structure) {
    return `
        <div class="tab-pane" id="complexity-${structure.id}">
            <h4>Time & Space Complexity Analysis</h4>
            <div class="complexity-grid">
                <div class="complexity-section time">
                    <h5>Time Complexity</h5>
                    <div class="complexity-items">
                        ${Object.entries(structure.timeComplexity).map(([operation, complexity]) => `
                            <div class="complexity-item">
                                <div class="complexity-operation">${operation}</div>
                                <div class="complexity-value">${complexity}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="complexity-section space">
                    <h5>Space Complexity</h5>
                    <div class="space-complexity">
                        <div class="space-complexity-value">${structure.spaceComplexity}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Create code block
function createCodeBlock(structureId, language) {
    const code = codeExamples[structureId] && codeExamples[structureId][language] 
        ? codeExamples[structureId][language] 
        : '// Implementation coming soon...';
    
    return `
        <div class="code-block">
            <div class="code-header">
                <div class="code-dots">
                    <div class="code-dot red"></div>
                    <div class="code-dot yellow"></div>
                    <div class="code-dot green"></div>
                </div>
                <div class="code-actions">
                    <span class="code-language">${language}</span>
                    <button class="copy-btn" data-code="${encodeURIComponent(code)}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        Copy
                    </button>
                </div>
            </div>
            <div class="code-content">
                <pre><code class="language-${language}">${escapeHtml(code)}</code></pre>
            </div>
        </div>
    `;
}

// Handle card expand/collapse
function handleCardExpand(e) {
    const structureId = e.target.dataset.id;
    const content = document.getElementById(`content-${structureId}`);
    const button = e.target;
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        button.textContent = 'Collapse';
    } else {
        content.style.display = 'none';
        button.textContent = 'Explore';
    }
}

// Handle tab switching
function handleTabSwitch(e) {
    const structureId = e.target.dataset.id;
    const tabName = e.target.dataset.tab;
    
    // Remove active class from all tabs and panes for this structure
    document.querySelectorAll(`[data-id="${structureId}"].tab-btn`).forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelectorAll(`#${tabName}-${structureId}, #overview-${structureId}, #implementation-${structureId}, #complexity-${structureId}`).forEach(pane => {
        pane.classList.remove('active');
    });
    
    // Add active class to clicked tab and corresponding pane
    e.target.classList.add('active');
    document.getElementById(`${tabName}-${structureId}`).classList.add('active');
}

// Handle language switching
function handleLanguageSwitch(e) {
    const language = e.target.dataset.language;
    const structureId = e.target.dataset.structure;
    
    // Remove active class from all language tabs and content for this structure
    document.querySelectorAll(`[data-structure="${structureId}"].language-tab`).forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelectorAll(`[id^="lang-"][id$="-${structureId}"]`).forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to clicked language tab and corresponding content
    e.target.classList.add('active');
    document.getElementById(`lang-${language}-${structureId}`).classList.add('active');
}

// Handle code copying
async function handleCodeCopy(e) {
    const code = decodeURIComponent(e.target.closest('.copy-btn').dataset.code);
    const button = e.target.closest('.copy-btn');
    
    try {
        await navigator.clipboard.writeText(code);
        
        // Update button text temporarily
        const originalHTML = button.innerHTML;
        button.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22,4 12,14.01 9,11.01"></polyline>
            </svg>
            Copied!
        `;
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy code:', err);
    }
}

// Handle web challenge navigation
function handleWebChallenge(e) {
    e.preventDefault();
    const structureId = e.target.closest('.web-challenge-btn').dataset.structure;
    
    // Create and navigate to challenge page
    createChallengePage(structureId);
}

// Create challenge page
function createChallengePage(structureId) {
    const structure = dataStructures.find(ds => ds.id === structureId);
    if (!structure) return;
    
    // Open challenge in new window
    const challengeWindow = window.open('', '_blank', 'width=1200,height=800');
    challengeWindow.document.write(createChallengeHTML(structure));
    challengeWindow.document.close();
}

// Create challenge HTML
function createChallengeHTML(structure) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${structure.name} Interactive Challenge</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .challenge-container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .challenge-header {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        .challenge-header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        
        .challenge-content {
            padding: 30px;
        }
        
        .visualization-area {
            background: #f8fafc;
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 30px;
            min-height: 400px;
            border: 2px dashed #e2e8f0;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        
        .controls {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .control-group {
            background: #f1f5f9;
            padding: 20px;
            border-radius: 10px;
        }
        
        .control-group h3 {
            margin-bottom: 15px;
            color: #334155;
        }
        
        .btn {
            background: #3b82f6;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            margin: 5px;
        }
        
        .btn:hover {
            background: #2563eb;
            transform: translateY(-2px);
        }
        
        .btn-danger {
            background: #ef4444;
        }
        
        .btn-danger:hover {
            background: #dc2626;
        }
        
        .btn-success {
            background: #10b981;
        }
        
        .btn-success:hover {
            background: #059669;
        }
        
        input[type="number"], input[type="text"] {
            width: 100%;
            padding: 10px;
            border: 2px solid #e2e8f0;
            border-radius: 6px;
            margin: 5px 0;
            font-size: 16px;
        }
        
        input[type="number"]:focus, input[type="text"]:focus {
            outline: none;
            border-color: #3b82f6;
        }
        
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        
        .stat-card {
            background: white;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            border: 2px solid #e2e8f0;
        }
        
        .stat-value {
            font-size: 1.5rem;
            font-weight: bold;
            color: #3b82f6;
        }
        
        .stat-label {
            color: #64748b;
            font-size: 0.875rem;
        }
        
        .node {
            width: 50px;
            height: 50px;
            background: #3b82f6;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            position: absolute;
            cursor: pointer;
            transition: all 0.3s ease;
            user-select: none;
        }
        
        .node:hover {
            transform: scale(1.1);
            box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
        }
        
        .node.highlight {
            background: #f59e0b;
            animation: pulse 1s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        .connection {
            position: absolute;
            height: 2px;
            background: #64748b;
            transform-origin: left center;
        }
        
        .drop-zone {
            width: 60px;
            height: 60px;
            border: 3px dashed #94a3b8;
            border-radius: 50%;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #94a3b8;
            font-size: 24px;
            transition: all 0.3s ease;
        }
        
        .drop-zone.active {
            border-color: #3b82f6;
            background: rgba(59, 130, 246, 0.1);
            color: #3b82f6;
        }
        
        .array-container {
            display: flex;
            gap: 5px;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .array-element {
            width: 60px;
            height: 60px;
            background: #3b82f6;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            font-weight: bold;
            position: relative;
            transition: all 0.3s ease;
        }
        
        .array-element.highlight {
            background: #f59e0b;
            transform: scale(1.1);
        }
        
        .array-index {
            position: absolute;
            bottom: -25px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 12px;
            color: #64748b;
        }
        
        .stack-container, .queue-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
        }
        
        .queue-container {
            flex-direction: row;
        }
        
        .operation-log {
            background: #1e293b;
            color: #e2e8f0;
            padding: 20px;
            border-radius: 10px;
            font-family: 'Monaco', 'Menlo', monospace;
            font-size: 14px;
            max-height: 200px;
            overflow-y: auto;
        }
        
        .success-message {
            background: #dcfce7;
            color: #166534;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
            border-left: 4px solid #16a34a;
        }
        
        .error-message {
            background: #fef2f2;
            color: #991b1b;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
            border-left: 4px solid #dc2626;
        }
    </style>
</head>
<body>
    <div class="challenge-container">
        <div class="challenge-header">
            <h1>${structure.name} Interactive Challenge</h1>
            <p>Learn by doing! Interact with the ${structure.name.toLowerCase()} and see how operations work in real-time.</p>
        </div>
        
        <div class="challenge-content">
            <div class="visualization-area" id="visualizationArea">
                ${getVisualizationContent(structure)}
            </div>
            
            <div class="controls">
                ${getControlsContent(structure)}
            </div>
            
            <div class="stats">
                <div class="stat-card">
                    <div class="stat-value" id="operationCount">0</div>
                    <div class="stat-label">Operations</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" id="elementCount">0</div>
                    <div class="stat-label">Elements</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" id="lastOperation">None</div>
                    <div class="stat-label">Last Operation</div>
                </div>
            </div>
            
            <div class="operation-log" id="operationLog">
                <div>Welcome to ${structure.name} Interactive Challenge!</div>
                <div>Try the operations above to see how ${structure.name.toLowerCase()} works.</div>
            </div>
        </div>
    </div>
    
    <script>
        ${getChallengeScript(structure)}
    </script>
</body>
</html>
    `;
}

// Get visualization content based on structure type
function getVisualizationContent(structure) {
    switch (structure.id) {
        case 'array':
            return '<div class="array-container" id="arrayContainer">Click "Add Element" to start!</div>';
        case 'linked-list':
            return '<div id="linkedListContainer">Click "Add Node" to start building your linked list!</div>';
        case 'stack':
            return '<div class="stack-container" id="stackContainer">Click "Push" to add elements to the stack!</div>';
        case 'queue':
            return '<div class="queue-container" id="queueContainer">Click "Enqueue" to add elements to the queue!</div>';
        case 'binary-tree':
            return `
                <div id="treeContainer">
                    <div style="text-align: center; color: #64748b;">
                        <h3>Drag numbers to build your binary tree!</h3>
                        <div style="margin: 20px 0;">
                            ${[1,2,3,4,5,6,7,8,9].map(num => 
                                `<div class="node" draggable="true" data-value="${num}" style="position: relative; display: inline-block; margin: 5px;">${num}</div>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            `;
        case 'hash-table':
            return '<div id="hashTableContainer">Click "Insert" to add key-value pairs!</div>';
        default:
            return '<div>Interactive visualization coming soon!</div>';
    }
}

// Get controls content based on structure type
function getControlsContent(structure) {
    switch (structure.id) {
        case 'array':
            return `
                <div class="control-group">
                    <h3>Add Elements</h3>
                    <input type="number" id="arrayValue" placeholder="Enter value" value="42">
                    <button class="btn" onclick="arrayPush()">Add Element</button>
                    <button class="btn" onclick="arrayInsert()">Insert at Index</button>
                    <input type="number" id="insertIndex" placeholder="Index" value="0">
                </div>
                <div class="control-group">
                    <h3>Remove Elements</h3>
                    <button class="btn btn-danger" onclick="arrayPop()">Remove Last</button>
                    <button class="btn btn-danger" onclick="arrayDelete()">Delete at Index</button>
                    <input type="number" id="deleteIndex" placeholder="Index" value="0">
                </div>
                <div class="control-group">
                    <h3>Search & Access</h3>
                    <input type="number" id="searchValue" placeholder="Search value" value="42">
                    <button class="btn btn-success" onclick="arraySearch()">Search</button>
                    <button class="btn btn-success" onclick="arrayAccess()">Access Index</button>
                    <input type="number" id="accessIndex" placeholder="Index" value="0">
                </div>
            `;
        case 'linked-list':
            return `
                <div class="control-group">
                    <h3>Add Nodes</h3>
                    <input type="number" id="nodeValue" placeholder="Enter value" value="42">
                    <button class="btn" onclick="listPrepend()">Add to Head</button>
                    <button class="btn" onclick="listAppend()">Add to Tail</button>
                </div>
                <div class="control-group">
                    <h3>Remove Nodes</h3>
                    <input type="number" id="removeValue" placeholder="Value to remove" value="42">
                    <button class="btn btn-danger" onclick="listDelete()">Remove Value</button>
                    <button class="btn btn-danger" onclick="listClear()">Clear All</button>
                </div>
                <div class="control-group">
                    <h3>Search</h3>
                    <input type="number" id="findValue" placeholder="Search value" value="42">
                    <button class="btn btn-success" onclick="listFind()">Find Value</button>
                </div>
            `;
        case 'stack':
            return `
                <div class="control-group">
                    <h3>Stack Operations</h3>
                    <input type="number" id="stackValue" placeholder="Enter value" value="42">
                    <button class="btn" onclick="stackPush()">Push</button>
                    <button class="btn btn-danger" onclick="stackPop()">Pop</button>
                </div>
                <div class="control-group">
                    <h3>Stack Info</h3>
                    <button class="btn btn-success" onclick="stackPeek()">Peek</button>
                    <button class="btn btn-danger" onclick="stackClear()">Clear</button>
                </div>
            `;
        case 'queue':
            return `
                <div class="control-group">
                    <h3>Queue Operations</h3>
                    <input type="number" id="queueValue" placeholder="Enter value" value="42">
                    <button class="btn" onclick="queueEnqueue()">Enqueue</button>
                    <button class="btn btn-danger" onclick="queueDequeue()">Dequeue</button>
                </div>
                <div class="control-group">
                    <h3>Queue Info</h3>
                    <button class="btn btn-success" onclick="queuePeek()">Peek</button>
                    <button class="btn btn-danger" onclick="queueClear()">Clear</button>
                </div>
            `;
        case 'binary-tree':
            return `
                <div class="control-group">
                    <h3>Tree Operations</h3>
                    <input type="number" id="treeValue" placeholder="Enter value" value="42">
                    <button class="btn" onclick="treeInsert()">Insert</button>
                    <button class="btn btn-danger" onclick="treeClear()">Clear Tree</button>
                </div>
                <div class="control-group">
                    <h3>Traversals</h3>
                    <button class="btn btn-success" onclick="treeInOrder()">In-Order</button>
                    <button class="btn btn-success" onclick="treePreOrder()">Pre-Order</button>
                    <button class="btn btn-success" onclick="treePostOrder()">Post-Order</button>
                    <button class="btn btn-success" onclick="treeLevelOrder()">Level-Order</button>
                </div>
            `;
        case 'hash-table':
            return `
                <div class="control-group">
                    <h3>Hash Table Operations</h3>
                    <input type="text" id="hashKey" placeholder="Enter key" value="name">
                    <input type="text" id="hashValue" placeholder="Enter value" value="John">
                    <button class="btn" onclick="hashSet()">Insert</button>
                    <button class="btn btn-success" onclick="hashGet()">Get</button>
                    <button class="btn btn-danger" onclick="hashDelete()">Delete</button>
                </div>
                <div class="control-group">
                    <h3>Hash Table Info</h3>
                    <button class="btn btn-success" onclick="hashKeys()">Show Keys</button>
                    <button class="btn btn-success" onclick="hashValues()">Show Values</button>
                    <button class="btn btn-danger" onclick="hashClear()">Clear All</button>
                </div>
            `;
        default:
            return '<div class="control-group"><h3>Controls coming soon!</h3></div>';
    }
}

// Get challenge script based on structure type
function getChallengeScript(structure) {
    // This would contain the interactive JavaScript for each data structure
    // For brevity, I'll include a basic example for arrays
    return `
        let dataStructure = [];
        let operationCount = 0;
        
        function updateStats() {
            document.getElementById('operationCount').textContent = operationCount;
            document.getElementById('elementCount').textContent = dataStructure.length;
        }
        
        function logOperation(operation, details = '') {
            const log = document.getElementById('operationLog');
            const entry = document.createElement('div');
            entry.textContent = \`[\${new Date().toLocaleTimeString()}] \${operation} \${details}\`;
            log.appendChild(entry);
            log.scrollTop = log.scrollHeight;
            
            document.getElementById('lastOperation').textContent = operation;
            operationCount++;
            updateStats();
        }
        
        function showMessage(message, type = 'success') {
            const container = document.querySelector('.challenge-content');
            const messageDiv = document.createElement('div');
            messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
            messageDiv.textContent = message;
            container.insertBefore(messageDiv, container.firstChild);
            
            setTimeout(() => {
                messageDiv.remove();
            }, 3000);
        }
        
        // Array-specific functions (example)
        function arrayPush() {
            const value = parseInt(document.getElementById('arrayValue').value);
            if (isNaN(value)) {
                showMessage('Please enter a valid number', 'error');
                return;
            }
            
            dataStructure.push(value);
            renderArray();
            logOperation('PUSH', \`Added \${value} to end\`);
            showMessage(\`Added \${value} to array\`);
        }
        
        function arrayPop() {
            if (dataStructure.length === 0) {
                showMessage('Array is empty!', 'error');
                return;
            }
            
            const value = dataStructure.pop();
            renderArray();
            logOperation('POP', \`Removed \${value} from end\`);
            showMessage(\`Removed \${value} from array\`);
        }
        
        function renderArray() {
            const container = document.getElementById('arrayContainer');
            container.innerHTML = '';
            
            if (dataStructure.length === 0) {
                container.innerHTML = '<div style="color: #64748b;">Array is empty</div>';
                return;
            }
            
            dataStructure.forEach((value, index) => {
                const element = document.createElement('div');
                element.className = 'array-element';
                element.innerHTML = \`
                    \${value}
                    <div class="array-index">[\${index}]</div>
                \`;
                container.appendChild(element);
            });
        }
        
        // Initialize
        updateStats();
    `;
}

// Utility function to escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Add CSS for no results
const noResultsCSS = `
.no-results {
    text-align: center;
    padding: 4rem 2rem;
    color: #6b7280;
}

.no-results-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.no-results-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #374151;
}

.no-results-description {
    font-size: 1rem;
}

.language-content {
    display: none;
}

.language-content.active {
    display: block;
}
`;

// Add the CSS to the document
const style = document.createElement('style');
style.textContent = noResultsCSS;
document.head.appendChild(style);