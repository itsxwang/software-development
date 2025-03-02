"use strict";
// Implicitly , this happens when we not explicitly define types
// ------------------------------------------------------------
let myString = "Hello"; // here ts automatically inferred(figure out) the type that this is a string
// myString = 1; because ts inferred that this is a `myString` take string type values implicitly, so we can't assign number to string type variable
// if we take case of function
function Message(message) {
    return message;
}
/*  ts automatically inferred that what function going to return based on the information it knows about that funtion
    like here it inferred that this function going to return string type value based on the parameter type it knows
 */
// Explicitely define types , when we explicitly define types we called that type annotation
// ------------------------------------------------------------
// number: All numeric values (integers and floating point)
let age = 30;
// boolean: true or false values
let isLogedIn = true;
// Regex Type
// ------------------------------------------------------------
let myRegex = /foo/;
// Function Types
// ------------------------------------------------------------
// Functions can have typed parameters and return values
function greet(user) {
    console.log("Hello " + user);
    return undefined;
}
let userName = "Alice";
console.log(greet(userName));
// Function type annotation with arrow syntax , basically this is for function expression
// (parameter: type) => returnType
let functionName = function (parameters) {
    return parameters;
};
/*
can also be done like this
let functionName = (parameterType: string) : string => {
    return parameters;
}
*/
functionName('string_value'); // functionName(1); , gives error as this is not a string type
// Array Types
// ------------------------------------------------------------
// Two ways to declare array types:
// 1. Using square brackets: type[]
// 2. Using generic Array<type>
let myNums = [1, 2, 3, 'string'];
let genericArray = [1, 2, 3];
// Object Types
// ------------------------------------------------------------
// Objects with specific property types
let myObj = {
    name: "John Doe",
    age: 30
};
// Special Types
// ------------------------------------------------------------
// any: Opt-out of type checking
let myAny = "Hello"; // Can be assigned any type
// void: Absence of any type, commonly used as function return type
function logMessage(message) {
    console.log(message); // No return value
}
// never: Represents values that never occur
// Used for functions that never return (throw error or infinite loop)
function error(message) {
    throw new Error(message);
}
// Tuple Types
// ------------------------------------------------------------
// Fixed-length array where each element has a specific type
let myTuple = [1, "Hello"];
// here's a quick thing to know:
// if we make some array 
let myArray = [1, 's'];
// now if we try to assign myTuple a myArray
// myTuple = myArray;  // gives error , reason : Target(myTuple) requires 2 and only 2 element(s) but source(myArray) may have fewer or more.
// Enum Types
// ------------------------------------------------------------
// A way to give friendly names to numeric values
var Color;
(function (Color) {
    Color[Color["a"] = 1] = "a";
    Color[Color["b"] = 2] = "b";
    Color[Color["c"] = 3] = "c"; // Auto-increments to 3
})(Color || (Color = {}));
let myColor = 2; // so myColor can only contain 1,2,3 
// Unknown Type
// ------------------------------------------------------------
// Similar to any, but more type-safe as operations require type checking
let myUnknown = "Hello";
myUnknown = 1;
myUnknown = true;
// Union Types
// ------------------------------------------------------------
// Variable can hold more than one type
let myUnion = "Hello";
myUnion = 1; // Valid
// myUnion = true;  // Invalid: boolean not allowed
// Literal Types
// ------------------------------------------------------------
// Specific string/number/any values as types
let myLiteral = "hello"; // Can only be assigned "hello"
// We can also specify that a variable can be object of a specific class
// ------------------------------------------------------------
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let userobj = new User("John Doe", 30);
let guitaristobj = {
    name: "John Doe",
    // age: 30, still work fine
    instrument: "Guitar"
};
;
// so both are same 
function sayBye(message) {
    var _a;
    // now if we do this 
    // console.log( message.name.toUpperCase() )it gives error because : 'message.name' is possibly 'undefined'.
    // so we have to check if message.name is defined or not
    // if(message.name){} // we can use if 
    // or just do 
    console.log((_a = message.name) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    /*  so typescript realize in advance that message.name can also be undefined and upperCase() can cause error because of that,
    so that's one way it helps you eliminate errors in your code at compile time(development time) rather at run time(when the app runs) unlike in JavaScript  */
}
