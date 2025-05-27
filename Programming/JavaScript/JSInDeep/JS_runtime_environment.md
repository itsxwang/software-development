[JS Runtime Environment](https://youtu.be/2WJL19wDH68?si=FQsIhOjDr3-loM2W) 
- JS Runtime environment is like a big container which has all things to run JS code
    - [What are these things](https://youtu.be/2WJL19wDH68?si=VqpgY4fltkM9MTXr&t=35)
        - First JS engine because to run any piece of JS code we obviously need JS engine, as it includes **Heap** and **call stack** that is necessay for execution.
        - Set of APIs to connect to the outer environment
        - Event loop, microtask queue, callback queue
- And in fact Browser can run JS code because it has JS runtime environment inside it, and in fact every browser has JS Runtime environement that's why it able to run JS code.

- Node.js also has JS runtime environment, it is a open source JS runtime environment helps to execute JS code outside the browser.

- For example, we have to run JS code in our Water cooler, we need some JS runtime environment inside the water cooler to run JS code.

- [APIs in JS runtime environment](https://youtu.be/2WJL19wDH68?si=M2pvjzaIPGWw7Cgf&t=177)
   - APIs are kind of superpowers we can use in our JS code, different JS runtime environment can have different set of APIs, basically APIs gives JS Code access to the outside environment. 

- [List JS engines available](https://youtu.be/2WJL19wDH68?si=aFcJ4eM6NJBSyQT_&t=297)

----

## JS engine

So JS engine is a program that takes JS code and spits outs machine code, that can be executed by machines.

- [This input code goes through 3 step processes](https://youtu.be/2WJL19wDH68?si=RIfMLigQvRslskhr&t=457)

    - PARSING ->  COMPILATION -> EXECUTION 
    - These are the 3 things happening with your JS code in JS engine
        1. [PARSING](https://youtu.be/2WJL19wDH68?si=ELjP5q3Gwai3sDuK&t=537) ->  Code is broken down into tokens, there is also soemthing called **syntax parser** which basically takes the code and convert into [AST(Abstract Syntax Tree)](https://youtu.be/2WJL19wDH68?si=Cqnz8EvVppLuF5Mg&t=567)
       2. [Compilation](https://youtu.be/2WJL19wDH68?si=EZBur6_4udNuZ9H4&t=707) 
           - JS has something called **JIT(Just in time)** compiler
           - [Before talk about that, let's see the difference between intrepeted and compiled languages](https://youtu.be/2WJL19wDH68?si=kaKTYnyRMr13bdZq&t=747)
           - [Is js compiled or interpreted language](https://youtu.be/2WJL19wDH68?si=f8UoUcIglY1BJka7&t=847)
           - [JIT Compilation, and the reason JS said to be **Just in time compiled language** because modern browser versions can use both compiler along with interpreter, interpreter converts code to byte code and compiler converts byte code to machine code and perform optimizations](https://youtu.be/2WJL19wDH68?si=jpnmCQjuKaAvrTBY&t=887)

       3. [Execution](https://youtu.be/2WJL19wDH68?si=req9Qn47SkG3uDJm&t=927)

    - [AOT, Ahead of time compilation](https://youtu.be/2WJL19wDH68?si=VIokH_j9h7l6dYW8&t=987)
    - [Two required components of JS engine, for execution](https://youtu.be/2WJL19wDH68?si=-G_nwCinBqD0CltC&t=1007)
         - [Call stack](https://youtu.be/2WJL19wDH68?si=kuXPFUQzyUl5OS41&t=1037)
         - [Memory heap](https://youtu.be/2WJL19wDH68?si=v8B-pjNNMbxwJ2Nl&t=1107)
         
    - [Garbage Collector](https://youtu.be/2WJL19wDH68?si=6o48hxkAXi4HZNuu&t=1135)
    - It basically try to free up memory space whenever possible, it uses **Mark and Sweep algorithm** to do that.

- [About V8 Engine](https://youtu.be/2WJL19wDH68?si=b9Ild76q1QgWONgk&t=1307)
- [V8 JS engine architecture](https://youtu.be/2WJL19wDH68?si=9lhdGztobmp2-NjF&t=1385)

---

    ## [JS Runtime environment revised](https://youtu.be/2WJL19wDH68?si=o4XsecOvhmIc6k-y&t=1481)