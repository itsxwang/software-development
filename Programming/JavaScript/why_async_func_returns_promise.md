# What's the point of Async functions automatically return promise if we can and often return promise explicitely 

## What Happens When an `async` Function Returns a Promise?  

In JavaScript, when you mark a function with `async`, it **always returns a promise**, even if you don’t explicitly return one. This is useful because it allows the function to be awaited and ensures it executes asynchronously.  

### Example 1: `async` Function Implicitly Returning a Promise  
```js
async function fetchData() {
    return "Hello";  // Implicitly wrapped in a Promise
}

const result = fetchData();
console.log(result); // Output: Promise {<fulfilled>: "Hello"}

result.then(console.log); // Output: "Hello"
```
Even though we just returned `"Hello"`, JavaScript automatically wraps it in a `Promise.resolve("Hello")`.  

---

## Why Return an Explicit Promise?  

If you **manually** return a `Promise`, you have **more control** over when and how it resolves or rejects.  

### Example 2: Manually Returning a Promise  
```js
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello"), 1000);
    });
}

fetchData().then(console.log); // Output (after 1s): "Hello"
```
Here, we explicitly created a `Promise` to delay execution for 1 second.  

---

## What's the Point of `async` Functions Returning Promises?  

The key benefit is **automatic promise resolution** when using `await`.  

### Example 3: Using `await`  
```js
async function getData() {
    return "Data received";
}

async function main() {
    const data = await getData(); // Automatically waits for resolution
    console.log(data); // "Data received"
}

main();
```
Here, `await` ensures `getData()` resolves before moving forward.  

---

## If We Manually Return a Promise, Why Do We Need `async`?  

Technically, we **don’t need `async` if we always return promises explicitly**, but using `async` makes code more readable and maintainable.  

### Without `async`  
```js
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello"), 1000);
    });
}

fetchData().then(console.log);
```

### With `async`  
```js
async function fetchData() {
    return "Hello";  // Automatically wrapped in a promise
}

fetchData().then(console.log);
```
`async` just simplifies promise-based code.  

---

## Understanding `.then(console.log)`  

### Example 4: How Does `.then(console.log)` Work?  
```js
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello"), 1000);
    });
}

fetchData().then(console.log); 
```

### Step-by-Step Explanation:  
1. `fetchData()` returns a promise , and that resolves **after 1 second**.
2. `.then(console.log)` **waits for the promise to resolve**.
3. When the promise resolves, `.then()` **automatically passes the resolved value (`"Hello"`) as an argument to `console.log()`**.
4. Essentially, this:
   ```js
   fetchData().then(console.log);
   ```
   is **equivalent to**:
   ```js
   fetchData().then((data) => console.log(data));
   ```
   The only difference is that `console.log` is a function that can already takes a n number of arguments and logs those arguments to console , so we can pass it directly to `.then()` that will further pass in to `console.log` first argument by `then` (as `console.log` here is a call-back of `then`).

---

## Summary: Why Do `async` Functions Return Promises?  
1. **Automatic Promise Wrapping**: Any return value inside an `async` function is automatically converted into a resolved promise.  
2. **Cleaner Syntax with `await`**: We can use `await` inside `async` functions instead of `.then()`.  
3. **Implicit vs. Explicit Promises**: If you need more control (delays, condition-based resolution(or rejection also)), you explicitly return a `Promise`, but `async` still makes the function return a promise by default if we not return any promise explicitly.
4. **Better Readability & Maintainability**: `async/await` makes working with asynchronous code easier to understand.