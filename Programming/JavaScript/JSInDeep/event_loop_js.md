- [About JavaScript](https://youtu.be/vFJbKR6zfCE?si=VK7U_D4kq55R5dz0&t=87)
- JS is a synchronous single threaded language and it has only 1 call stack, means can execute only 1 function at a time

- [For more see this clip, How JS Engine(V8) executes code using call stack) ](https://youtu.be/8zKuNo4ay8E?si=jVQx2lu1M5D5qEXl&t=47)
   - When any JS Code runs the **GEC(Global Execution Context)** and pushed it into the call stack, and this GEC contains all the js top level code that immediately executes line by line in Call stack. 


## JavaScript Runtime (V8)

- **V8** is a JavaScript engine that provides:
    - **Heap**: A memory area for dynamic memory allocation, where objects and variables are stored.
    - **Call Stack**: A stack structure that tracks function calls and manages their execution order. Main Job of call Stack is to execute whatever comes inside it, it not wait for anything.

- [But what if we have to wait for something? Answer is Web APIs](https://youtu.be/8zKuNo4ay8E?si=Q0WJJFyDB7ajae3e&t=227)
    - [What is global object(**window**)?](https://youtu.be/8zKuNo4ay8E?si=_HRPlTzEHBUIndTX&t=597)
    - Basically global object gives us access to browser APIs and Node.js APIs inside JS code. Browser kind of wrap all superpowers (like setTimeout, setInterval, etc) in global object



- [Event loops and callback Queue](https://youtu.be/8zKuNo4ay8E?si=KU5SytxWDse3LfGq&t=967)

## The Event Loop

- The **event loop** enables JavaScript to handle asynchronous operations without blocking the main thread.
- It works with the **call stack** and the **task queue** (also known as the **callback queue**) and **microtask queue**(greater priority than callback queue).
    - [Why do we need callback queue](https://youtu.be/8zKuNo4ay8E?si=vcODNLtvKUCqH8jw&t=1507) 

### How the Event Loop Works

1. The program starts executing, and functions are pushed onto the call stack(GEC pushes it) as they are invoked.
2. If a function contains asynchronous code (e.g., `setTimeout`, Promises, or I/O operations), that code is delegated to browser APIs or Node.js APIs.
3. Once the asynchronous operation completes, its callback is placed in the task queue.
4. The event loop continuously monitors the call stack:
        - If the call stack is empty, the event loop takes the first callback from the task queue and pushes it onto the call stack for execution.
5. This cycle repeats, allowing JavaScript to process asynchronous tasks efficiently.

> **Note:** This mechanism is what allows JavaScript to remain non-blocking and responsive, even when handling time-consuming operations.

- [Full end to end example of program execution](https://youtu.be/8zKuNo4ay8E?si=E8AIUY5p3rsHR3AS&t=1137)
- [program execution example that contains fetch api(asynchronous code)](https://youtu.be/8zKuNo4ay8E?si=KFwEVqTZO3BRw8Cc&t=1637)
    - [Microtask Queue](https://youtu.be/8zKuNo4ay8E?si=dS3_-MC58PrUVmtl&t=1827)
         - Basically in the case of promises(and network calls), when a promise is resolved, the callback inside the `.then` goes into microtask queue, which **is a queue that has more priority than normal ***callback queue*****. Means callbacks inside microtask queue will execute first(means take by **event loop** first into call stack). 
             - [What can come inside microtask queue](https://youtu.be/8zKuNo4ay8E?si=AoO-WjByWyUOmfu-&t=2177)
             - All the callbacks that comes through **promises** and **mutation observers**(which is used to observe that is there any mutation in DOM) goes into microtask queue.

- [Satarvation of Functions in Callback Queue](https://youtu.be/8zKuNo4ay8E?si=9sQehbKK9qAdX_B4&t=2337)