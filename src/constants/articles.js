const articles = [
  {
    id: 1,
    title: "Currying Explained with a Coffee Example",
    description:
      "Discover the concept of currying in JavaScript through a coffee-making analogy. Learn its benefits and how to implement it effectively for cleaner, reusable functions in your projects.",
    date: "January 1, 2025",
    sections: [
      {
        heading: "What is Currying?",
        content:
          "Currying is a functional programming technique that transforms a function with multiple arguments into a sequence of nested functions, each taking a single argument. This makes functions more reusable and composable.",
      },
      {
        heading: "Why Use Currying?",
        content:
          "Currying makes your code more modular and allows you to partially apply arguments. This is particularly useful when you frequently use a function with some arguments fixed.",
      },
      {
        heading: "Curried Coffee Example: Line-by-Line Breakdown",
        content:
          "Let's create a function to build a coffee order step by step using currying.",
        code: "function makeCoffee(type) {\n  return function (size) {\n    return function (extra) {\n      return `${size} ${type} with ${extra}`;\n    };\n  };\n}\n\n// Using the curried function\nconst coffeeOrder = makeCoffee('Latte')('Large')('Extra Foam');\nconsole.log(coffeeOrder); // Output: Large Latte with Extra Foam",
      },
      {
        heading: "Adding a Predefined Function: makeLatteCoffee",
        content:
          "We can use currying to create specialized functions like `makeLatteCoffee`, which simplifies ordering Latte with default options.",
        code: "const makeLatteCoffee = makeCoffee('Latte');\nconst latteOrder = makeLatteCoffee('Medium')('No Sugar');\nconsole.log(latteOrder); // Output: Medium Latte with No Sugar\n\n// One-liner version\nconst makeLatteCoffeeOneLiner = (size) => (extra) => `Medium Latte with ${extra}`;\nconst latteOrderOneLiner = makeLatteCoffeeOneLiner('Medium')('No Sugar');\nconsole.log(latteOrderOneLiner); // Output: Medium Latte with No Sugar",
      },
      {
        heading: "Real-Life Use Case: Filtering in React",
        content:
          "Currying can be used in React applications to create reusable filter functions for data rendering. For example, let's create a filter for products based on category and price range.",
        code: "function filterProductsByCategory(category) {\n  return function (minPrice) {\n    return function (maxPrice) {\n      return function (products) {\n        return products.filter(\n          (product) =>\n            product.category === category &&\n            product.price >= minPrice &&\n            product.price <= maxPrice\n        );\n      };\n    };\n  };\n}\n\n// Example usage in a React component\nconst products = [\n  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },\n  { id: 2, name: 'Phone', category: 'Electronics', price: 700 },\n  { id: 3, name: 'Shirt', category: 'Clothing', price: 50 }\n];\n\nconst filterElectronics = filterProductsByCategory('Electronics')(500)(1500);\nconst filteredProducts = filterElectronics(products);\nconsole.log(filteredProducts);\n/* Output:\n[\n  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },\n  { id: 2, name: 'Phone', category: 'Electronics', price: 700 }\n]*/\n\n// One-liner version\nconst filterProductsByCategoryOneLiner = (category) => (minPrice) => (maxPrice) => (products) => products.filter((product) => product.category === category && product.price >= minPrice && product.price <= maxPrice);\nconst filterElectronicsOneLiner = filterProductsByCategoryOneLiner('Electronics')(500)(1500);\nconst filteredProductsOneLiner = filterElectronicsOneLiner(products);\nconsole.log(filteredProductsOneLiner);",
      },
    ],
  },
  {
    id: 2,
    title: "Closure Explained with a Bank Example",
    description:
      "Understand closures in JavaScript with a relatable bank example, demonstrating how functions retain access to variables in their scope, even after their parent function has executed.",
    date: "January 6, 2025",
    sections: [
      {
        heading: "What is a Closure?",
        content:
          "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. This allows the function to remember and access variables from its outer scope even after the outer function has finished execution.",
      },
      {
        heading: "Why Use Closures?",
        content:
          "Closures are useful for data encapsulation, creating private variables, and maintaining state in a functional programming style. It allows functions to 'remember' data even after their parent scope has finished execution.",
      },
      {
        heading: "Bank Example with Closure",
        content:
          "Let's create a bank account using closures. This example will demonstrate how closures can help in encapsulating account balance information and updating it securely.",
        code: "function createAccount(initialBalance) {\n  let balance = initialBalance;\n  return function (action, amount) {\n    if (action === 'deposit') {\n      balance += amount;\n    } else if (action === 'withdraw') {\n      if (balance >= amount) {\n        balance -= amount;\n      } else {\n        console.log('Insufficient funds');\n      }\n    } else if (action === 'checkBalance') {\n      console.log('Balance:', balance);\n    }\n  };\n}\n\n// Creating a bank account\nconst myAccount = createAccount(1000);\nmyAccount('deposit', 500);  // Depositing 500\nmyAccount('checkBalance'); // Output: Balance: 1500\nmyAccount('withdraw', 200); // Withdrawing 200\nmyAccount('checkBalance'); // Output: Balance: 1300",
      },
      {
        heading: "Step-by-Step Explanation",
        content: [
          {
            point: "Outer Function (`createAccount`)",
            details:
              "The outer function accepts an `initialBalance` argument and initializes a `balance` variable to store the account balance.",
          },
          {
            point: "Inner Function",
            details:
              "The inner function takes two arguments: `action` (which can be 'deposit', 'withdraw', or 'checkBalance') and `amount`. Depending on the `action`, it performs the corresponding operation on the `balance`. The inner function has access to the `balance` variable because of the closure, which means it retains access to the outer function's variables even after the outer function finishes execution.",
          },
          {
            point: "Action Handling",
            details:
              "The inner function handles three actions: \n- **'deposit'**: Increases the balance by the specified amount.\n- **'withdraw'**: Decreases the balance by the specified amount if there are sufficient funds; otherwise, it logs 'Insufficient funds'.\n- **'checkBalance'**: Logs the current balance to the console.",
          },
          {
            point: "Reusability",
            details:
              "You can create multiple instances of bank accounts with their own isolated `balance`. Each account operates independently, allowing you to perform actions such as deposit, withdraw, and check balance for each one separately.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Promises in JavaScript with Pizza Delivery Example",
    description:
      "Learn JavaScript Promises with a relatable pizza delivery example, exploring pending, fulfilled, and rejected states. Understand asynchronous programming concepts and their real-world applications effectively.",
    date: "January 19, 2025",
    sections: [
      {
        heading: "What is a Promise?",
        content:
          "A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation. Promises allow you to handle asynchronous code in a more manageable and readable way by avoiding callback hell.",
      },
      {
        heading: "Why Use Promises?",
        content: [
          {
            point: "Avoid Callback Hell",
            details:
              "Promises provide a way to handle asynchronous code in a cleaner and more understandable manner. Instead of nesting callbacks, Promises can chain `.then()` and `.catch()` to handle success and error responses.",
          },
          {
            point: "Improved Readability",
            details:
              "Promises help in writing asynchronous code in a linear manner, making the flow of execution more readable and maintainable.",
          },
          {
            point: "Better Error Handling",
            details:
              "Promises allow for proper error handling using `.catch()` which is much easier than dealing with error-prone callback chains.",
          },
        ],
      },
      {
        heading: "The Three States of a Promise",
        content: [
          {
            point: "Pending",
            details:
              "In the pizza delivery example, the promise starts in the 'pending' state. This state indicates that the asynchronous operation, which is the pizza delivery, is still in progress. The promise is waiting for the result—whether the pizza will be delivered successfully or not.",
          },
          {
            point: "Fulfilled",
            details:
              "If the pizza is delivered successfully (simulated by setting `pizzaReady = true`), the promise enters the 'fulfilled' state. The resolve function is called, and the message 'Pizza delivered!' is returned. This state represents that the operation was completed successfully.",
          },
          {
            point: "Rejected",
            details:
              "If the pizza is not delivered successfully (simulated by setting `pizzaReady = false`), the promise enters the 'rejected' state. The reject function is called, and the message 'Sorry, pizza is not ready yet.' is returned. This state represents that the operation failed.",
          },
        ],
      },
      {
        heading: "Pizza Delivery Example",
        content:
          "In this example, we'll use a Promise to simulate a pizza delivery process. The delivery process will be asynchronous, and we'll handle the fulfillment or rejection of the delivery through the Promise.",
      },
      {
        heading: "Promise Code Example",
        code: "const pizzaDelivery = new Promise((resolve, reject) => {\n  const pizzaReady = true; // Simulate if the pizza is ready or not\n  setTimeout(() => {\n    if (pizzaReady) {\n      resolve('Pizza delivered!');\n    } else {\n      reject('Sorry, pizza is not ready yet.');\n    }\n  }, 2000); // Simulate delivery time\n});\n\npizzaDelivery\n  .then((message) => {\n    console.log(message); // Outputs: Pizza delivered!\n  })\n  .catch((error) => {\n    console.log(error); // Outputs: Sorry, pizza is not ready yet.\n  });",
      },
      {
        heading: "Step-by-Step Explanation",
        content: [
          {
            point: "Creating the Promise",
            details:
              "We create a new Promise using the `new Promise()` constructor. The promise takes a function with two arguments: `resolve` and `reject`. This function represents the asynchronous operation, which in our case is pizza delivery.",
          },
          {
            point: "Simulating Pizza Delivery",
            details:
              "We simulate whether the pizza is ready using a boolean variable `pizzaReady`. Using `setTimeout()`, we mimic a delivery time of 2 seconds. If the pizza is ready, we call `resolve()` to indicate the operation was successful. If not, we call `reject()`.",
          },
          {
            point: "Handling Promise Outcome",
            details:
              "After creating the promise, we handle its result by chaining `.then()` and `.catch()` methods. If the promise is resolved, we log the success message. If it is rejected, we log the error message.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Event Delegation in React with Todo List Example",
    description:
      "Learn Event Delegation in React with a practical Todo List example, enhancing performance by efficiently managing events on dynamically added list items using a single parent handler.",
    date: "January 26, 2025",
    sections: [
      {
        heading: "What is Event Delegation in React?",
        content:
          "In React, event delegation works by attaching a single event listener to a parent element and allowing it to handle events from dynamically added child elements. While React doesn't rely on traditional event delegation, the principle can still be used to manage events more efficiently in complex applications.",
      },
      {
        heading: "Why Use Event Delegation in React?",
        content: [
          {
            point: "Efficiency with Multiple Event Listeners",
            details:
              "Instead of adding individual event listeners to each element, you can manage events centrally, improving performance, especially in cases where there are many dynamic elements.",
          },
          {
            point: "Dynamic Elements Handling",
            details:
              "Event delegation allows React to handle events even if child elements are added or removed dynamically. This can be particularly useful when elements are created or updated based on user interaction or data changes.",
          },
          {
            point: "Simpler and Cleaner Code",
            details:
              "By using delegation techniques, you can avoid repetitive code and unnecessary complexity, making your component code cleaner and easier to manage.",
          },
        ],
      },
      {
        heading: "Example",
        content:
          "Let's implement a Todo List in React where we manage the adding and deleting of tasks using event delegation principles.",
      },
      {
        heading: "React Code Example",
        code: "import React, { useState } from 'react';\n\nconst TodoList = () => {\n  const [tasks, setTasks] = useState([]);\n  const [taskInput, setTaskInput] = useState('');\n\n  // Handle form submission\n  const handleSubmit = (event) => {\n    event.preventDefault(); // Prevent default form behavior\n    if (taskInput) {\n      setTasks([...tasks, taskInput]); // Add new task to the list\n      setTaskInput(''); // Clear input field\n    }\n  };\n\n  // Event delegation for task deletion\n  const handleTaskClick = (event) => {\n    if (event.target && event.target.classList.contains('delete-button')) {\n      const taskIndex = event.target.getAttribute('data-index');\n      setTasks(tasks.filter((_, index) => index !== parseInt(taskIndex))); // Remove task from list\n    }\n  };\n\n  return (\n    <div>\n      <h2>Todo List</h2>\n      <form onSubmit={handleSubmit}>\n        <input\n          type='text'\n          value={taskInput}\n          onChange={(e) => setTaskInput(e.target.value)}\n          placeholder='Enter a new task'\n        />\n        <button type='submit'>Add Task</button>\n      </form>\n      <ul onClick={handleTaskClick}>\n        {tasks.map((task, index) => (\n          <li key={index}>\n            {task}\n            <button className='delete-button' data-index={index}>Delete</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n};\n\nexport default TodoList;",
      },
      {
        heading: "Step-by-Step Explanation",
        content: [
          {
            point: "Handling Form Submit",
            details:
              "When the form is submitted, we capture the event, prevent the default form behavior, and add the new task to the `tasks` array in the state.",
          },
          {
            point: "Handling Task Deletion with Event Delegation",
            details:
              "The `handleTaskClick` function is attached to the `ul` (parent element). This allows us to listen for clicks on the `delete` button of any task. If a delete button is clicked, we retrieve its `data-index` attribute to find the task index, then remove that task from the list.",
          },
          {
            point: "Efficient Task Management",
            details:
              "By delegating the delete event to the `ul` element, we avoid having to attach a separate event listener to each delete button. This centralizes the event handling and simplifies the code.",
          },
          {
            point: "Event Delegation in React",
            details:
              "Though React uses a virtual DOM and doesn't require manual event delegation like in vanilla JavaScript, the concept is still reflected in how React components handle events through state updates and centralized functions.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Understanding call, apply, and bind in JavaScript",
    description:
      "Learn the key differences between call, apply, and bind in JavaScript, with practical examples to simplify method invocation and context binding in your projects.",
    date: "February 2, 2025",
    sections: [
      {
        heading: "What are call, apply, and bind?",
        content:
          "In JavaScript, call, apply, and bind are methods used to control the value of this in a function. These methods allow you to invoke a function with a specified this context, and optionally pass arguments. They are extremely useful in various scenarios, including function borrowing and setting the context of a function's execution.",
      },
      {
        heading: "Why Use call, apply, and bind?",
        content: [
          {
            point: "Control the Context of this",
            details:
              "These methods allow you to control which object the function is executed in, by specifying a specific `this` value. This is particularly useful when dealing with object methods.",
          },
          {
            point: "Borrow Methods from Other Objects",
            details:
              "With call and apply, you can borrow methods from other objects and use them on the current object.",
          },
          {
            point: "Optimize Performance with Function Binding",
            details:
              "bind allows you to create a new function with a fixed this context, which can be useful in event handling or setting the context for callbacks.",
          },
        ],
      },
      {
        heading: "Example",
        content:
          "Let's explore each method with examples that illustrate their usage, including how we can pass parameters to the functions.",
      },
      {
        heading: "call, apply, and bind Code Example",
        code: "const person = {\n  firstName: 'John',\n  lastName: 'Doe',\n  fullName: function(city, country) {\n    return `${this.firstName} ${this.lastName}, ${city}, ${country}`;\n  }\n};\n\nconst anotherPerson = {\n  firstName: 'Jane',\n  lastName: 'Smith'\n};\n\n// Using call with parameters\nconsole.log(person.fullName.call(anotherPerson, 'Paris', 'France')); // Outputs: Jane Smith, Paris, France\n\n// Using apply with parameters\nconsole.log(person.fullName.apply(anotherPerson, ['Paris', 'France'])); // Outputs: Jane Smith, Paris, France\n\n// Using bind with parameters\nconst boundFullName = person.fullName.bind(anotherPerson, 'Paris', 'France');\nconsole.log(boundFullName()); // Outputs: Jane Smith, Paris, France",
      },
      {
        heading: "Step-by-Step Explanation",
        content: [
          {
            point: "call Method with Parameters",
            details:
              "The call method allows you to invoke a function with a specified this context and pass parameters directly. In this case, call(anotherPerson, 'Paris', 'France') changes this to anotherPerson and passes the parameters 'Paris' and 'France' to the fullName function.",
          },
          {
            point: "apply Method with Parameters",
            details:
              "The apply method works similarly to call, but instead of passing parameters directly, you pass them as an array. In this case, apply(anotherPerson, ['Paris', 'France']) passes 'Paris' and 'France' as an array to the fullName function.",
          },
          {
            point: "bind Method with Parameters",
            details:
              "bind creates a new function with a fixed this context and predefined parameters. The boundFullName function is created with this bound to anotherPerson and the parameters 'Paris' and 'France'. When boundFullName() is called later, it outputs 'Jane Smith, Paris, France'.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Hoisting in JavaScript",
    description:
      "Hoisting in JavaScript explains how variable and function declarations are moved to the top during compilation, affecting scope, var, let, const, and function behavior.",
    date: "February 8, 2025",
    sections: [
      {
        heading: "What is Hoisting?",
        content:
          "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase, before the code has been executed.",
      },
      {
        heading: "Why is Hoisting Important?",
        content: [
          {
            point: "Understanding Variable Initialization",
            details:
              "Hoisting helps us understand how variables are initialized and where they are accessible in JavaScript. It’s important to know which variables are available before they are initialized.",
          },
          {
            point: "Avoiding Errors in Code",
            details:
              "By understanding hoisting, developers can avoid unexpected behavior like accessing variables before they are initialized.",
          },
        ],
      },
      {
        heading: "What is Temporal Dead Zone (TDZ)?",
        content:
          "The Temporal Dead Zone (TDZ) refers to the time between the entering of the scope and the variable declaration where the variable cannot be accessed. This happens for variables declared with `let` and `const`.",
      },
      {
        heading:
          "TDZ Example with let, const, var, Function and Arrow Function",
        content:
          "Unlike var, let and const are hoisted to the top of their scope but are not initialized until their declaration line is executed. This causes a Temporal Dead Zone (TDZ) where accessing the variable before its declaration will result in a ReferenceError.",
      },
      {
        heading: "Code Example - Hoisting with TDZ",
        code: "console.log(x); // Outputs: undefined\nvar x = 5;\n\nconsole.log(y); // ReferenceError: Cannot access 'y' before initialization\nlet y = 10;\n\nconsole.log(z); // ReferenceError: Cannot access 'z' before initialization\nconst z = 20;\n\nfunction normalFunction() {\n  console.log('This is a regular function.');\n}\n\nnormalFunction(); // Outputs: This is a regular function\n\nconst arrowFunction = () => {\n  console.log('This is an arrow function.');\n};\n\narrowFunction(); // Outputs: This is an arrow function",
      },
      {
        heading: "Step-by-Step Explanation",
        content: [
          {
            point: "Using `var` (Hoisting with Initialization)",
            details:
              "With `var`, the declaration is hoisted but the initialization stays in place. As a result, the variable is available before its initialization but will have the value `undefined`.",
          },
          {
            point: "Using `let` and `const` (TDZ)",
            details:
              "With `let` and `const`, the variable is hoisted but cannot be accessed before its declaration line. If accessed before, it will result in a ReferenceError due to the Temporal Dead Zone (TDZ).",
          },
          {
            point: "Function Hoisting",
            details:
              "Function declarations are hoisted with their entire body, so they can be called before their definition. Both regular functions and arrow functions are hoisted, but arrow functions are hoisted differently than function declarations.",
          },
          {
            point: "Arrow Function Hoisting",
            details:
              "Arrow functions are treated as function expressions, meaning they are hoisted but not initialized until their definition line is executed. Accessing an arrow function before its definition results in a ReferenceError.",
          },
        ],
      },
    ],
  },
];
export default articles;
